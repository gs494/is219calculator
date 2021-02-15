const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {

    let result = Calculator.Sum(1,2);
    expect(result).toBe(3);
});