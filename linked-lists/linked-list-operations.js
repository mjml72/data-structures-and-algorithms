class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function traversAndPrint(head) {
    let currentNode = head;

    while (currentNode) {
        console.log(`${currentNode.data} -> `);
        currentNode = currentNode.next;
    }
    console.log(null);
}

let node1 = new Node(1);
let node2 = new Node(9);
let node3 = new Node(8);
let node4 = new Node(7);
let node5 = new Node(11);


node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


traversAndPrint(node1);

function findLowest(head){
    let lowest = head.data;
    let currentNode = head.next;
    while(currentNode){
        if(currentNode.data < lowest){
            lowest = currentNode.data;
        }
        currentNode = currentNode.next;
    }

    return lowest;
}


console.log(`The lowest is: ${findLowest(node1)}`);

function deleteNode(head, nodeToDelete) {
    if(head === nodeToDelete){
        return head.next;
    }
    let currentNode = head;
    while (currentNode.next && currentNode.next != nodeToDelete){
        currentNode = currentNode.next;
    }

    if(currentNode.next === null){
        return head;
    }

    currentNode.next = currentNode.next.next;

    return head;
}

function insertNode(head, newNode, position) {
    if(position === 1){
        newNode.next = head;
        return newNode;
    }

    let currentNode = head;
    for (let i = 0; i < position - 2; i++) {
        if(currentNode === null){
            break;
        }
        currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
    return head;
}

let newNode = new Node(97);
node1 = insertNode(node1, newNode, 6);
traversAndPrint(node1);


