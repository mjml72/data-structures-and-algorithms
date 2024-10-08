class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const node1 = new Node(1);
const node2 = new Node(9);
const node3 = new Node(8);
const node4 = new Node(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node1;

let currentNode = node1;
let startNode = node1;
console.log(`${currentNode.data} ->`);
currentNode = currentNode.next;
while (currentNode !== startNode){
    console.log(`${currentNode.data} -> `);
    currentNode = currentNode.next;
}
console.log(`...`);
