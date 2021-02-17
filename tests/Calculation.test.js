const Calculation = require('../src/models/Calculation');
const Sum = require('../src/Operations/Sum');
const Difference = require('../src/Operations/Difference');
const Product = require('../src/Operations/Product');
const Quotient = require('../src/Operations/Quotient');
const Square = require('../src/Operations/Square');
const SquareRoot = require('../src/Operations/SquareRoot');

test('Test of Calculation Instantiation', () => {

    let op = Sum
    let calculation = new Calculation(1,2,op);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});
test('Test Get results for Sum function', () => {
    //I need to test the get results function
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(3);
});
test('Test Get results for Difference  function', () => {
    //I need to test the get results function
    let op = Difference;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(-1);
});
test('Test Get results for Product  function', () => {
    //I need to test the get results function
    let op = Product;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(2);
});
test('Test Get results for Quotient  function', () => {
    //I need to test the get results function
    let op = Quotient;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(.5);
});
test('Test Get results for Square  function', () => {
    //I need to test the get results function
    let op = Square;
    let calculation = new Calculation(2, null, op);
    expect(calculation.GetResults()).toBe(4);
});
test('Test Get results for Squareroot  function', () => {
    //I need to test the get results function
    let op = SquareRoot;
    let calculation = new Calculation(9, null, op);
    expect(calculation.GetResults()).toBe(3);
});