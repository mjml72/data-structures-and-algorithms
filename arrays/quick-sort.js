let myarray = [1, 7, 110, 9, 3];

function pivote(array, low, high) {
    let pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i += 1;
            let number = array[i];
            array[i] = array[j];
            array[j] = number;
        }
    }
    let number = array[i+1];
    array[i+1] = array[high];
    array[high] = number;
    return i + 1;
}

function quicksort(array, low = 0, high = null) {
    if (high === null) {
        high = array.length - 1;
    }
    if (low < high) {
        pivotIndex = pivote(array, low, high);
        quicksort(array, low, pivotIndex - 1);
        quicksort(array, pivotIndex + 1, high);
    }
}
quicksort(myarray);
console.log(myarray);