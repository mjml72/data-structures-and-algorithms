let myarray = [1,7,110,9,3];

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
       if(array[i] === target){
        return i;
       }
    }
    return -1;
}


let result = linearSearch(myarray, 1);
if (result != -1) {
    console.log(`Found at index ${result}`);
}else{
    console.log(`Not Found`);
}
