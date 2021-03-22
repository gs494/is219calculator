const Squareroot = require('./SquareRoot');
const Variance = require('./Variance');
function StandardDeviation(values){
    return Squareroot(Variance(values));
}
module.export = StandardDeviation;