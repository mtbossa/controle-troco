const flexContainerCoins = document.querySelector('#coins');
const flexContainerCash = document.querySelector('#cash');
const totalValue = document.querySelector('#valor-total');

let totalValueNumber = 0.00;

coins.forEach(createMoneyColumns);

cash.forEach(createMoneyColumns);

function createMoneyColumns(currentValue) {

    const moneyColumn = document.createElement('div');
    moneyColumn.classList.add('money-column');

    const moneyValueH2 = document.createElement('h2');
    moneyValueH2.innerHTML = `R$ ${currentValue.numberString}`;

    const label = document.createElement('label');
    label.setAttribute('for', `${currentValue.numberName}`);
    label.innerHTML = '<h4>Quantidade</h4>'

    const input = document.createElement('input');
    input.setAttribute('name', `${currentValue.numberName}`);
    input.setAttribute('id', `${currentValue.numberName}`);
    input.setAttribute('type', 'number');
    input.setAttribute('min', '0');
    input.setAttribute('max', '10000');
    input.addEventListener('input', updateValue);

    const valorTotalH3 = document.createElement('h3');
    valorTotalH3.innerHTML = 'Valor Total:';

    const valorMonetario = document.createElement('h2');
    valorMonetario.classList.add('valor-monetario');
    valorMonetario.innerHTML = 'R$ 0,00';

    const span = document.createElement('span');

    moneyColumn.appendChild(moneyValueH2);
    moneyColumn.appendChild(span);
    moneyColumn.appendChild(label);
    moneyColumn.appendChild(input);
    moneyColumn.appendChild(valorTotalH3);
    moneyColumn.appendChild(valorMonetario);

    if (currentValue.number < 2) {
        flexContainerCoins.appendChild(moneyColumn);
    } else {
        flexContainerCash.appendChild(moneyColumn);
    }

    function updateValue(e) {

        let value = e.target.value
        let total = (value * currentValue.number).toFixed(2);

        currentValue.totalSum = parseFloat(total);

        calculate();

        valorMonetario.textContent = 'R$' + total.replace('.', ',');
    }

}

function calculate() {
    totalValueNumber = 0.0;
    coins.forEach(currentValue => {
        totalValueNumber += currentValue.totalSum
    });
    cash.forEach(currentValue => {
        totalValueNumber += currentValue.totalSum
    });
    totalValue.innerHTML = 'R$ ' + totalValueNumber.toFixed(2).replace('.', ',');
}