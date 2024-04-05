let myarray = [1,7,110,9,3];
let radixArray = [[],[],[],[],[],[],[],[],[],[]];
let counts = [0,0,0,0,0,0,0,0,0,0];
let max = Math.max.apply(null, myarray);
let exp = 1;

while( max / exp > 0){

    for (let i = 0; i < myarray.length; i++) {
        let radixIndex = Math.floor((myarray[i] / exp) % 10);
        radixArray[radixIndex][counts[radixIndex]] = myarray[i];
        counts[radixIndex]++;
    }

    let pos = 0;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < counts[i]; j++) {
            myarray[pos] = radixArray[i][j];
            pos++;
        }
        
        counts[i] = 0;
    }

    exp *= 10;

}


console.log(myarray);