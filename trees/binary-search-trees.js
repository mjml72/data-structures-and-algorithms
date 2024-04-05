class TreeNode {

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }
    inOrderTraversal(node.left);
    console.log(node.data);
    inOrderTraversal(node.right);
}


let root = new TreeNode(13);
let node7 = new TreeNode(7);
let node15 = new TreeNode(15);
let node3 = new TreeNode(3);
let node8 = new TreeNode(8);
let node14 = new TreeNode(14);
let node19 = new TreeNode(19);
let node91 = new TreeNode(91);
let node1 = new TreeNode(1);
root.left = node7;
root.right = node15;

node7.left = node3;
node7.right = node8;

node15.left = node14;
node15.right = node19;


node19.right = node91;
node3.left = node1;

function search(node, target) {
    if(node === null){
        return;
    }else if (node.data === target) {
        return node;
    }else if (target < node.data) {
        return search(node.left, target);
    }else{
        return search(node.right, target);
    }
}

function insert(node, data) {
    if(node === null){
        return new TreeNode(data);
    }else{
        if(data < node.data){
            node.left = insert(node.left, data);
        }else if (data > node.data) {
            node.right = insert(node.right, data);   
        }
    }
    return node;
}


function lowestNode(node) {
    let current = node;
    while(current && current.left){
        current = current.left;
    }
    return current;
}

function deleteNode(node, data) {
    if(node === null){
        return null;
    }
    if(data < node.data){
        node.left = deleteNode(node.left, data);
    }else if (data > node.data) {
        node.right = deleteNode(node.right, data);
    }else{

        if(node.left === null){
            return node.right;
        }else if (node.right === null) {
            return node.left;
        }


        node.data = lowestNode(node.right).data;
        node.right = deleteNode(node.right, node.data);
    }
    return node;
}


inOrderTraversal(root);
let result = search(root, 1);
if(result){
    console.log(`The result : ${result.data}`);
}else{
    console.log("Not Found");
}

let lowest = lowestNode(root);
console.log(`Lowest: ${lowest.data}`);