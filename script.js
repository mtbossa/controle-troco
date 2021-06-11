const values = [
    [0.05, '0,05', 'cincoCentavos', 0.0],
    [0.10, '0,10', 'dezCentavos', 0.0],
    [0.25, '0,25', 'vinceCincoCentavos', 0.0],
    [0.50, '0,50', 'cinquentaCentavos', 0.0],
    [1.00, '1,00', 'umReal', 0.0],
    [2.00, '2,00', 'doisReais', 0.0],
    [5.00, '5,00', 'cincoReais', 0.0],
    [10.00, '10,00', 'dezReais', 0.0],
    [20.00, '20,00', 'vinteReais', 0.0],
    [50.00, '50,00', 'cinquentaReais', 0.0],
    [100.00, '100,00', 'cemReais', 0.0],
    [200.00, '200,00', 'duzentosReais', 0.0]
];

const flexContainer = document.querySelector('#flex-container');

const totalValue = document.querySelector('#valor-total');

let totalValueNumber = 0.00;

values.forEach(valorAtual => {

    const moneyColumn = document.createElement('div');
    moneyColumn.classList.add('money-column');

    const moneyValueH2 = document.createElement('h2');
    moneyValueH2.innerHTML = `R$ ${valorAtual[1]}`;

    const label = document.createElement('label');
    label.setAttribute('for', `${valorAtual[2]}`);
    label.innerHTML = '<h4>Quantidade</h4>'

    const input = document.createElement('input');
    input.setAttribute('name', `${valorAtual[2]}`);
    input.setAttribute('id', `${valorAtual[2]}`);
    input.setAttribute('type', 'number');
    input.setAttribute('min', '0');
    input.setAttribute('max', '10000');
    input.addEventListener('input', updateValue);

    const valorTotalH3 = document.createElement('h3');
    valorTotalH3.innerHTML = 'Valor Total:';

    const valorMonetario = document.createElement('h2');
    valorMonetario.classList.add('valor-monetario');
    valorMonetario.innerHTML = 'R$ 0,00';

    const hr = document.createElement('hr');

    moneyColumn.appendChild(moneyValueH2);
    moneyColumn.appendChild(hr);
    moneyColumn.appendChild(label);
    moneyColumn.appendChild(input);
    moneyColumn.appendChild(valorTotalH3);
    moneyColumn.appendChild(valorMonetario);

    flexContainer.appendChild(moneyColumn);

    function updateValue(e) {

        let value = e.target.value
        let total = (value * valorAtual[0]).toFixed(2);

        valorAtual[3] = parseFloat(total);
        calculate();

        valorMonetario.textContent = 'R$' + total.replace('.', ',');

    }

    function calculate() {
        totalValueNumber = 0.0;
        values.forEach(element => {
            totalValueNumber += element[3]
        });
        console.log(totalValueNumber);
        totalValue.innerHTML = 'R$ ' + totalValueNumber.toFixed(2).replace('.', ',');
    }

});