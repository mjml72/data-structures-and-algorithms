class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(data) {
        this.queue.push(data);
    }

    dequeue() {
        if (this.isEmpty()) {
            return `queue is empty`;
        }
        return this.queue.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return `queue is empty`;
        }
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }
}

const myqueue = new Queue();

myqueue.enqueue('A');
myqueue.enqueue('B');
myqueue.enqueue('C');
myqueue.enqueue('D');
console.log(`Queue: ${myqueue.queue}`);
console.log(`Dequeue: ${myqueue.dequeue()}`);
console.log(`Peek: ${myqueue.peek()}`);
console.log(`isEmpty: ${myqueue.isEmpty()}`);
console.log(`Size: ${myqueue.size()}`);


class QueueLinkedList {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(data) {
        let newnode = new Node(data);
        if (this.rear === null) {
            this.front = this.rear = newnode;
            this.length++;
            return;
        }
        this.rear.next = newnode;
        this.rear = newnode;
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'queue is empty';
        }
        let temp = this.front;
        this.front = temp.next;
        this.length--;
        if(this.front === null){
            this.rear = null;
        }
        return temp.data;
    }

    peek(){
        if (this.isEmpty()) {
            return 'queue is empty';
        }
        return this.front.data;
    }

    isEmpty(){
        return this.length === 0;
    }

    size(){
        return this.length;
    }

}

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
const queue = new QueueLinkedList();

queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
queue.enqueue('D');
console.log(`Dequeue: ${queue.dequeue()}`);
console.log(`Peek: ${queue.peek()}`);
console.log(`isEmpty: ${queue.isEmpty()}`);
console.log(`Size: ${queue.size()}`);
