function Sum (a,b) {
    return a + b;
}

function Sum(values){
    var total = 0;
    for (var i = 0 ; i < values.length; i++){
        total += values[i];
    }
    return total;
}
module.exports = Sum;