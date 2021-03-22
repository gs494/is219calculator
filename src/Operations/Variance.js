const Mean = require('./Mean')
function Variance(values){

    mean=Mean(values);

    temp = 0;

    for(i=0;i<values.length;i++){

        temp += Math.pow(values[i]-mean,2);

    }

    return temp/values.length;

}
module.export = Variance;