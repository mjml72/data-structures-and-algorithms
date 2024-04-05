class TreeNode{
    
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let root = new TreeNode('R');
let nodeA = new TreeNode('A');
let nodeB = new TreeNode('B');
let nodeC = new TreeNode('C');
let nodeD = new TreeNode('D');
let nodeE = new TreeNode('E');
let nodeF = new TreeNode('F');

root.left = nodeA;
root.right = nodeB;

nodeA.left = nodeC;
nodeA.right = nodeD;

nodeB.left = nodeE;
nodeB.right = nodeF;

console.log(root.right.left.data, root.right.right.data);



function preOrderTraversal(node) {
    if(node === null){
        return;
    }
    console.log(node.data);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
}


function inOrderTraversal(node) {
    if(node === null){
        return;
    }
    inOrderTraversal(node.left);
    console.log(node.data);
    inOrderTraversal(node.right);
}


function postOrderTraversal(node){
    if(node == null){
        return;
    }
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.data);
}


let BinaryTreeArray = ['R','A','B','C','D','E','F'];

function leftChildIndex(index) {
    return 2 * index + 1;
}

function rightChildIndex(index){
    return 2 * index + 2;
}

function getData(index){
    if (index >= 0 && index <= BinaryTreeArray.length) {
        return BinaryTreeArray[index];
    }
    return null;
}

function preOrder(index) {
    if(index >= BinaryTreeArray.length || BinaryTreeArray[index] === null){return [];}
    return BinaryTreeArray[index] + preOrder(leftChildIndex(index)) + preOrder(rightChildIndex(index));
}

function inOrder(index) {
    if(index >= BinaryTreeArray.length || BinaryTreeArray[index] === null){return [];}
    return  preOrder(leftChildIndex(index)) + BinaryTreeArray[index] + preOrder(rightChildIndex(index));
}

function postOrder(index) {
    if(index >= BinaryTreeArray.length || BinaryTreeArray[index] === null){return [];}
    return  preOrder(leftChildIndex(index)) + preOrder(rightChildIndex(index)) + BinaryTreeArray[index];
}

let rightChild = rightChildIndex(0);
let rightChildOfRightChild = rightChildIndex(rightChild);
let data = getData(rightChildOfRightChild);

console.log(data);

console.log(preOrder(0));
console.log(inOrder(0));
console.log(postOrder(0));