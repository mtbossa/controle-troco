function createMoneyColumns(currentValue) {
    // moneyColumns
    const moneyColumn = document.createElement('div');
    moneyColumn.classList.add('money-column');
    
    // moneyValueH2
    const moneyValueH2 = document.createElement('h2');
    moneyValueH2.innerHTML = `R$ ${currentValue.value.toFixed(2).replace('.', ',')}`;
    moneyColumn.appendChild(moneyValueH2);
    
    // span
    const span = document.createElement('span');
    moneyColumn.appendChild(span);

    // label
    const label = document.createElement('label');
    label.setAttribute('for', `${currentValue.valueName}`);
    label.innerHTML = '<h4>Quantidade</h4>'
    moneyColumn.appendChild(label);

    // input
    const input = document.createElement('input');
    input.setAttribute('name', `${currentValue.valueName}`);
    input.setAttribute('id', `${currentValue.valueName}`);
    input.setAttribute('type', 'number');
    input.setAttribute('min', '0');
    input.setAttribute('max', '10000');
    input.addEventListener('input', updateValue);
    moneyColumn.appendChild(input);

    // totalValueH3
    const totalValueH3 = document.createElement('h3');
    totalValueH3.innerText = 'Valor Total:';
    moneyColumn.appendChild(totalValueH3);

    // monetaryValue
    const monetaryValue = document.createElement('h2');
    monetaryValue.classList.add('valor-monetario');
    monetaryValue.innerText = 'R$ 0,00';
    moneyColumn.appendChild(monetaryValue);

    // flexContainer - checks which one to use, either coin or cash
    if (currentValue.value < 2) {
        const flexContainer = document.querySelector('#coins');
        flexContainer.appendChild(moneyColumn);
    } else {
        const flexContainer = document.querySelector('#cash');
        flexContainer.appendChild(moneyColumn);
    }

    // event listener on each input
    function updateValue(e) {

        let value = e.target.value
        let total = (value * currentValue.value).toFixed(2);

        currentValue.totalSum = parseFloat(total);

        calculate();

        monetaryValue.textContent = 'R$' + total.replace('.', ',');
    }

}

// selector
const total = document.querySelector('#valor-total');

// calculates the total every time the input changes
function calculate() {    
    let totalValue = 0.0;
    coins.forEach((currentValue) => {
        totalValue += currentValue.totalSum
    });
    cash.forEach((currentValue) => {
        totalValue += currentValue.totalSum
    });
    total.innerHTML = 'R$ ' + totalValue.toFixed(2).replace('.', ',');
}

// runs the createMoneyColumns for each element inside each array
coins.forEach(createMoneyColumns);

cash.forEach(createMoneyColumns);