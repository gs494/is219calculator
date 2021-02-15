const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    let calculator = new Calculator();
    let result = calculator.Sum(1,2);
    expect(result).toBe(3);
});