let myarray = [1,7,110,9,3];

for (let i = 0; i < myarray.length - 1; i++) {
    let ordered = false;
    for (let j = 0; j < myarray.length - i - 1; j++) {
        if(myarray[j] > myarray[j+1]){
            let number = myarray[j];
            myarray[j] = myarray[j+1];
            myarray[j+1] = number;
            ordered = true;
        }
        
    }
    if(ordered === false){
        break;
    }
}

console.log(myarray);