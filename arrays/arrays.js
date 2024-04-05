const arrayNumbers = [1,2,3,4,5,6,7,8,9];

function lowest(arr) {
    let lowNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < lowNumber){
            lowNumber = arr[i];
        }
    }
    return lowNumber;
}

function highest(arr) {
    let maxNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
       if(arr[i] > maxNumber){
        maxNumber = arr[i];
        }
    }
    return maxNumber;
}


console.log(highest(arrayNumbers), lowest(arrayNumbers));


