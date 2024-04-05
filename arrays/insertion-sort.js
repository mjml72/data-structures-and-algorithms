let myarray = [1,7,110,9,3];

for (let i = 1; i < myarray.length; i++) {
    let insertIndex = i;
    let currentNumber = myarray[i];
    for (let j = i-1; j >= 0; j--) {
        if(myarray[j] > currentNumber){
            myarray[j+1] = myarray[j];
            insertIndex = j;
        }else{
            break;
        }
        
    }
    myarray[insertIndex] = currentNumber;
}


console.log(myarray);