function Mode(values){

    var count=0;

    maxCount = 0;

    for(i=0;i<values.length;i++){

        tempCount=0;

        for(j=i+1;j<values.length;j++){

            if(values[i]==values[j]){

                tempCount++;

            }

        }

        if(tempCount>maxCount){

            maxCount=tempCount;

        }

    }

    list="";

    for(i=0;i<values.length;i++){

        tempCount=0;

        for(j=i+1;j<values.length;j++){

            if(values[i]==values[j]){

                tempCount++;

            }

        }

        if(tempCount==maxCount){

            list+=values[i]+" ";

        }

    }

    return list;

}
module.export=Mode;