let myarray = [1,7,110,9,3];

for (let i = 0; i < myarray.length; i++) {
    let ordered = false;
    for (let j = 0; j < myarray.length - i; j++) {
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