class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return null;
    } else if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.length = 0;
      return temp;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      this.length--;
      return temp;
    }
  }

  printAll() {
    if (this.length === 0) {
      console.log("Nothing in this linked list.");
      return;
    }
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

let myQueue = new Queue();
myQueueue.enque("Mike");
myQueueue.enque("Harry");
myQueueue.enque("James");
myQueueue.enque("Kevin");

myQueue.printAll();
console.log("----------------------------");

myQueue.dequeue();
myQueue.dequeue();

myQueue.printAll();
