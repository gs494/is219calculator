function Median(values){

    for(i=0;i<values.length;i++){

        for(j=i+1;j<values.length;j++){

            if(values[i]>values[j]){

                temp = values[i];

                values[i] = values[j];

                values[j] =temp;

            }

        }

    }

    numsLen = values.length;

    var median=0;

    if (

        numsLen % 2 === 0 // is even

    ) {

// average of two middle numbers

        median = (values[numsLen / 2 - 1] + values[numsLen / 2]) / 2;

    } else { // is odd

// middle number only

        median = values[(numsLen - 1) / 2];

    }

    return median;

}
module.export=Median;