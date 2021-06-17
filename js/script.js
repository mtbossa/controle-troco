// Selector
const headerTotal = document.querySelector('#total-sum');

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
    input.setAttribute('id', `${currentValue.valueName}`);
    input.setAttribute('type', 'number');
    input.setAttribute('min', '0');
    input.setAttribute('max', '10000');
    input.addEventListener('input', moneyColumnSum);
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
     * @param {*} e 
     */
    function moneyColumnSum(e) {

        const value = e.target.value
        const total = (value * currentValue.value).toFixed(2);
        currentValue.totalSum = parseFloat(total);
        moneyColumnSumH2.textContent = 'R$' + total.replace('.', ',');

        //  Needs to be invoked on every input
        totalSum();
    }

}

/**
 * Every time a value is inputted, this will be called,
 * calculating the totalSum by looping through both arrays
 * and adding their totalSum propriety to totalSum variable.
 */
function totalSum() {
    // Needs to be setted to 0.0, otherwise would keep infinitely adding
    let totalSum = 0.0;

    coins.forEach((currentValue) => {
        totalSum += currentValue.totalSum
    });
    cash.forEach((currentValue) => {
        totalSum += currentValue.totalSum
    });

    headerTotal.innerHTML = 'R$ ' + totalSum.toFixed(2).replace('.', ',');
}

// Runs the createMoneyColumns for each element inside each array
coins.forEach(createMoneyColumns);

cash.forEach(createMoneyColumns);