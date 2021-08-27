// Selector
const headerTotal = document.querySelector('#total-sum');
const headerTotalSumMoedas = document.querySelector('#total-sum-moedas');
const headerTotalSumNotas = document.querySelector('#total-sum-notas');
const refreshIcon = document.querySelector('#refresh-icon');

/**
 * Changes the value to be the max if the input is greater-than it
 * @param {number} max The max possible input that the user can enter
 * @returns {}
 */
function maxInputVerification(max) {   
    
    return function () {

        //Se o input for maior que 15.4 ele irá fixa o valor maximo no value
        if (parseFloat(this.value) > max) {
            this.value = max;
        }

    };
}

// Determines the max possible input
const maxInputValue = 2000;
const f = maxInputVerification(maxInputValue);

function createMoneyColumns(currentValue) {
    // moneyColumns
    const moneyColumn = document.createElement('div');
    moneyColumn.classList.add('money-column');

    // moneyValueH2 - title - identifies the column with the value
    const moneyValueH2 = document.createElement('h2');
    moneyValueH2.innerHTML = `R$ ${currentValue.value.toFixed(2).replace('.', ',')}`;
    moneyColumn.appendChild(moneyValueH2);

    // span -  decoration
    const span = document.createElement('span');
    moneyColumn.appendChild(span);

    // Label - for the input
    const label = document.createElement('label');
    label.setAttribute('for', `${currentValue.valueName}`);
    label.innerHTML = '<h4>Quantidade</h4>'
    moneyColumn.appendChild(label);

    // Input
    const input = document.createElement('input');
    input.setAttribute('name', `${currentValue.valueName}`);
    input.setAttribute('class', 'input');
    input.setAttribute('id', `${currentValue.valueName}`);
    input.setAttribute('type', 'number');
    input.setAttribute('min', '0');
    input.setAttribute('max', '2000');
    input.addEventListener('input', moneyColumnSum);
    input.addEventListener('input', f);
    moneyColumn.appendChild(input);

    // totalValueH3 - title/text
    const totalValueH3 = document.createElement('h3');
    totalValueH3.innerText = 'Valor Total:';
    moneyColumn.appendChild(totalValueH3);

    // moneyColumnSumH2 - shows the sum of the column values. Starts with R$ 0,00, will be changed once some value gets inputted
    const moneyColumnSumH2 = document.createElement('h2');
    moneyColumnSumH2.classList.add('money-column-sum');
    moneyColumnSumH2.innerText = 'R$ 0,00';
    moneyColumn.appendChild(moneyColumnSumH2);

    /**
     * Checks where to append the current moneyColumn depending
     * on the current value. If value < 2, means it's a coin, so
     * it will be appended to the #coins container.
     */
    if (currentValue.value < 2) {
        const flexContainer = document.querySelector('#coins');
        flexContainer.appendChild(moneyColumn);
    } else {
        const flexContainer = document.querySelector('#cash');
        flexContainer.appendChild(moneyColumn);
    }

    /**
     * Called on every input. Calculatates the sum in the current
     * moneyColumn, displays it and then calls totalSum()
     * @param {*} e The input
     */
    function moneyColumnSum(e) {
        const amount = e.target.value;

        if(amount <= maxInputValue) {
            sum(amount);
        } else {
            sum(maxInputValue);
        }
        
    }
    
    /**
     * Calculates and updates the text result in moneyColumn with the result.
     * Calculates the totalSum() as well.
     * @param {number} amount The amount inputted
     */
    function sum(amount) {
        const total = (amount * currentValue.value).toFixed(2);
        currentValue.totalSum = parseFloat(total);
        moneyColumnSumH2.textContent = 'R$' + total.replace('.', ',');
    
        //  Needs to be invoked on every input
        totalSum();
    }

    // Selects all the input fields and the total value from each column
    // so we can add the event listener to the icon 'Limpar'
    const inputs = document.querySelectorAll('.input')
    const totalValuesColumns = document.querySelectorAll('.money-column-sum');

    // Sets the sum values to 0 after clicking
    refreshIcon.addEventListener('click', () => {
        inputs.forEach(input => {
            input.value = '';            
        });

        totalValuesColumns.forEach(totalValueColumn => {
            totalValueColumn.innerText = 'R$ 0,00';        
        });

        cash.forEach(currentValue => {
            currentValue.totalSum = 0;
        });

        coins.forEach(currentValue => {
            currentValue.totalSum = 0;
        });

        headerTotal.innerHTML = 'R$ 0,00';
        headerTotalSumMoedas.innerHTML = 'R$ 0,00'
        headerTotalSumNotas.innerHTML = 'R$ 0,00'
    });
}


/**
 * Every time a value is inputted, this will be called,
 * calculating the totalSum by looping through both arrays
 * and adding their totalSum propriety to totalSum variable.
 */
function totalSum() {
    // Needs to be setted to 0.0, otherwise would keep infinitely adding
    let totalSum = 0.0;
    let totalSumMoedas = 0.0;
    let totalSumNotas = 0.0;

    coins.forEach((currentValue) => {
        totalSum += currentValue.totalSum
        totalSumMoedas += currentValue.totalSum
    });
    cash.forEach((currentValue) => {
        totalSum += currentValue.totalSum
        totalSumNotas += currentValue.totalSum
    });

    headerTotal.innerHTML = 'R$ ' + totalSum.toFixed(2).replace('.', ',');
    headerTotalSumMoedas.innerHTML = 'R$ ' + totalSumMoedas.toFixed(2).replace('.', ',');
    headerTotalSumNotas.innerHTML = 'R$ ' + totalSumNotas.toFixed(2).replace('.', ',');
}

// Runs the createMoneyColumns for each element inside each array
coins.forEach(createMoneyColumns);

cash.forEach(createMoneyColumns);