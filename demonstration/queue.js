import { Queue } from "../data-structures/queue.js";

// Queue usage example:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.printQueue());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.printQueue());
console.log(queue.isEmpty());
console.log(queue.size());
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty());
