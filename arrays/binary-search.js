let myarray = [1, 7, 110, 9, 3];
myarray.sort(function (a, b) {
    return a - b;
});
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let mid = Math.round((left + right) / 2);

        if (array[mid] === target) { return mid }
        array[mid] < target ? left = mid + 1 : right = mid - 1;

    }

    return -1;
}

console.log(binarySearch(myarray, 1));