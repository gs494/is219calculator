const Difference = require('./Difference');
const Mean = require('./Mean');
const Quotient = require('./Quotient');
const StandardDeviation = require('./StandardDeviation');
function Zscore(val, values){
    x = Difference(Mean(values), val);
    return Quotient(StandardDeviation(values), x);
}
module.export=Zscore;