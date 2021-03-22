const Sum = require("./Sum");
function Mean(values){

    sum = Sum(values);

    return sum/values.length;

}
module.exports = Mean;