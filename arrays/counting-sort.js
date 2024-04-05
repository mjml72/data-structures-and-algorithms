let myarray = [1,7,110,9,3,1,7,110,9,3,1,7,110,9,3];

function countingsort(array) {
    let max = array[0];
    const sortingArray = [];
    for (const num of array) {
        if(num > max){
            max = num;
        }
    }
    let count = [];
    
    for (let i = 0; i <= max; i++) {
        count[i] = 0;
    }

    for (const num of array) {
        count[num]++;
    }
    
    for (let i = 0; i <= max; i++) {
        while(count[i] > 0){
            sortingArray.push(i);
            count[i]--;
        }
        
    }

    return sortingArray;
}
console.log(countingsort(myarray));