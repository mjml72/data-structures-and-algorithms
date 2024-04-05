let prevLoop = 0, prevRecursive = 0;
let numberLoop = 1, numberRecursive = 1;

function fibonacciLoop(count) {

    console.log(prevLoop);
    console.log(numberLoop);

    for (let i = 0; i < count; i++) {
        let resultnumber = prevLoop + numberLoop;
        console.log(resultnumber);
        prevLoop = numberLoop;
        numberLoop = resultnumber;
    }
}

console.log(prevRecursive);
console.log(numberRecursive);

function fibonacciRecursive(count) {
    if(count <= 0) return;
    let resultnumber = prevRecursive + numberRecursive;
    console.log(resultnumber);
    prevRecursive = numberRecursive;
    numberRecursive = resultnumber;
    fibonacciRecursive(count - 1);
}


fibonacciRecursive(10);
fibonacciLoop(10);