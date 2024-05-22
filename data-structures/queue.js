// Represents a Queue with basic property: queue.
export class Queue {
  // Creates an instance of Queue.
  constructor() {
    this.queue = [];
  }

  // Add an element to the end of the Queue.
  enqueue(element) {
    this.queue.push(element);
  }

  // Remove and return the element at the front of the Queue.
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty!";
    }
    return this.queue.shift();
  }

  // Return the element at the front of the Queue without removing it.
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty!";
    }
    return this.queue[0];
  }

  // Check if the Queue is empty.
  isEmpty() {
    return this.queue.length === 0;
  }

  // Get the size of the Queue.
  size() {
    return this.queue.length;
  }

  // Print the Queue.
  printQueue() {
    return this.queue.join(" ");
  }
}

// Represents a PriorityQueue with basic property: queue.
export class PriorityQueue extends Queue {
  // Add an element to the end of the PriorityQueue.
  enqueue(val, priority) {
    this.queue.push({ val, priority });
    this.sort();
  }

  // Remove and return the element at the front of the PriorityQueue.
  dequeue() {
    return this.queue.shift();
  }

  // Sort the PriorityQueue.
  sort() {
    this.queue.sort((a, b) => a.priority - b.priority);
  }
}
