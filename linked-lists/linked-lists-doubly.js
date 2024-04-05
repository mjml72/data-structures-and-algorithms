class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

const node1 = new Node(1);
const node2 = new Node(9);
const node3 = new Node(8);
const node4 = new Node(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;

node2.prev = node1;
node3.prev = node2;
node4.prev = node3;
let currentNode = node1;
console.log('Traversy forward:');
while (currentNode){
    console.log(`${currentNode.data} -> `);
    currentNode = currentNode.next;
}
console.log(null);
console.log('Traversy backward:');
currentNode = node4;
while(currentNode){
    console.log(`${currentNode.data} ->`);
    currentNode = currentNode.prev;
}
console.log(null);