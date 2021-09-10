/**
 * Stores all coins currently being used in Brazil
 * value: the number value
 * valueName: used to create the HTML input id
 * totalSum: will hold the sum after input
 */
const coins = [
    {
        value: 0.05,
        valueName: 'cincoCentavos',
        totalSum: 0.0,
        color: [
            'rgb(85, 61, 51)',
            'rgb(85, 56, 40)'
        ]
    },
    {
        value: 0.10,
        valueName: 'dezCentavos',
        totalSum: 0.0,
        color: [
            'rgb(216, 165, 100)',
            'rgb(212, 145, 77)'
        ]
    },
    {
        value: 0.25,
        valueName: 'vinteCincoCentavos',
        totalSum: 0.0,
        color: [
            'rgb(220, 180, 90)',
            'rgb(212, 159, 89)'
        ]
    },
    {
        value: 0.50,
        valueName: 'cinquentaCentavos',
        totalSum: 0.0,
        color: [            
            'rgb(194, 189, 185)',
            'rgb(171, 168, 161)',         
        ]
        
    },
    {
        value: 1.00,
        valueName: 'umReal',
        totalSum: 0.0,
        color: [
            'rgb(194, 189, 185)',
            'rgb(220, 180, 90)'            
        ]
    },
];

/**
 * Stores all cash currently being used in Brazil
 * value: the number value
 * valueName: used to create the HTML input id
 * totalSum: will hold the sum after input
 */
const cash = [
    {
        value: 2.00,
        valueName: 'doisReais',
        totalSum: 0.0,
        color: [
            'rgb(66, 117, 180)',
            'rgb(123, 153, 186)'            
        ]
    },
    {
        value: 5.00,
        valueName: 'cincoReais',
        totalSum: 0.0,
        color: [
            'rgb(125, 62, 115)',
            'rgb(131, 72, 118)',                     
        ]
    },
    {
        value: 10.00,
        valueName: 'dezReais',
        totalSum: 0.0,
        color: [
            'rgb(124, 38, 41)',
            'rgb(151, 63, 75)',                     
        ]
    },
    {
        value: 20.00,
        valueName: 'vinteReais',
        totalSum: 0.0,
        color: [
            'rgb(219, 178, 90)',
            'rgb(234, 211, 169)',                     
        ]
    },
    {
        value: 50.00,
        valueName: 'cinquentaReais',
        totalSum: 0.0,
        color: [
            'rgb(214, 164, 141)',
            'rgb(202, 168, 141)',                     
        ]
    },
    {
        value: 100.00,
        valueName: 'cemReais',
        totalSum: 0.0,
        color: [
            'rgb(49, 107, 131)',
            'rgb(112, 183, 201)',                                
        ]
    },
    {
        value: 200.00,
        valueName: 'duzentosReais',
        totalSum: 0.0,
        color: [
            'rgb(115, 96, 89)',    
            'rgb(142, 132, 122)',                                        
        ]
    },
];