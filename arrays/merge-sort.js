let myarray = [1, 7, 110, 9, 3];

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.round(arr.length / 2);
    let leftHalf = arr.slice(0, mid);
    let rightHalf = arr.slice(mid);

    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (left.length > i && right.length > j) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }
    if(left.length > 0){
        for (let index = i; index < left.length; index++) {
            result.push(left[index]);
        }
    }
    if(right.length > 0){
        for (let index = j; index < right.length; index++) {
            result.push(right[index]);
        }
    }
    return result;
}
console.log(mergeSort(myarray));