const myHashSet = new Array(10);
for (let i = 0; i < myHashSet.length; i++) {
    myHashSet[i] = [];
}


function hashFunction(str) {
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }
    return sum % 10;
}

function add(str) {
    let index = hashFunction(str);
    let bucket = myHashSet[index];
    if(!bucket.includes(str)){
        bucket.push(str);
    }
}

function contains(str) {
    let index = hashFunction(str);
    let bucket = myHashSet[index];
    return bucket.includes(str);
}

add("Microsoft");
add("Apple");
add("Google");
add("Siri");
add("Linux");
add("Amazon");

for (const bucket of myHashSet) {
    console.log(bucket);
}
console.log(`Contains Amazon: ${contains('Amazon')}`);
