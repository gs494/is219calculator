const MathOperations = require('./Operations/MathOperations');
const Sum = require('./Operations/Sum');
const Difference = require('./Operations/Difference');
const Product = require('./Operations/Product');
const Quotient = require('./Operations/Quotient');
const Square = require('./Operations/Square');
const SquareRoot = require('./Operations/SquareRoot');

class Calculator {
    static Calculations = []
    static Sum(a,b){
        let calculation = new Calculation(a,b,Sum);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static Difference(a,b){
        let calculation = new Calculation(a,b,Difference);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static Product(a,b){
        let calculation = new Calculation(a,b,Product);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static Quotient(a,b){
        let calculation = new Calculation(a,b,Quotient);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static Square(a){
        let calculation = new Calculation(a,Square);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static SquareRoot(a){
        let calculation = new Calculation(a,SquareRoot);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
}
module.exports = Calculator;