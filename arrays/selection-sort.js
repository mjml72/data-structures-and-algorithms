let myarray = [1,7,110,9,3];

for (let i = 0; i < myarray.length; i++) {
    let indexLowest = i;
    
    for (let j = i+1; j < myarray.length; j++) {
        if(myarray[j] < myarray[indexLowest]){
            indexLowest = j;
        }
        
    }

    let number = myarray[i];
    myarray[i] = myarray[indexLowest];
    myarray[indexLowest] = number;
}


console.log(myarray);