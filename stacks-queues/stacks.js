class Stack{
    constructor(){
        this.stack = [];
    }

    push(item){
        this.stack.push(item);
    }

    pop(){
        if(this.isEmpty()){
            return 'stack is empty';
        }
        return this.stack.pop();
    }

    peek(){
        if(this.isEmpty()){
            return 'stack is empty';
        }
        return this.stack[this.stack.length-1];
    }

    isEmpty(){
        return this.stack.length === 0;
    }

    size(){
        return this.stack.length;
    }
}

const mystack = new Stack();

mystack.push('A');
mystack.push('B');
mystack.push('C');
mystack.push('D');
console.log(`Stack: ${mystack.stack}`);
console.log(`Pop: ${mystack.pop()}`);
console.log(`Peek: ${mystack.peek()}`);
console.log(`isEmpty: ${mystack.isEmpty()}`);
console.log(`Size: ${mystack.size()}`);


class StackLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }


    push(data){
        let newNode = new Node(data);
        if(this.head){
            newNode.next = this.head;
        }
        this.head = newNode;
        this.size++;
    }


    pop(){
        if(this.isEmpty()){
            return 'stack is empty';
        }
        let poped = this.head;
        this.head = this.head.next;
        this.size--;
        return poped.data;
    }

    peek(){
        if(this.isEmpty()){
            return 'stack is empty';
        }
        return this.head.data;
    }

    isEmpty(){
        return this.size === 0;
    }

    stacksize(){
        return this.size;
    }
}

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
const stack = new StackLinkedList();
stack.push('A');
stack.push('B');
stack.push('C');
stack.push('D');
console.log(`Pop: ${stack.pop()}`);
console.log(`Peek: ${stack.peek()}`);
console.log(`isEmpty: ${stack.isEmpty()}`);
console.log(`Size: ${stack.stacksize()}`);