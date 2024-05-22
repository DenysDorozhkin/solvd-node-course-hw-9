// Represents a Stack with basic property: stack.
export class Stack {
  // Creates an instance of Stack.
  constructor() {
    this.stack = [];
  }

  // Add an element to the top of the Stack.
  push(element) {
    this.stack.push(element);
  }

  // Remove and return the top element of the Stack.
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.stack.pop();
  }

  // Return the top element of the Stack without removing it.
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.stack[this.stack.length - 1];
  }

  // Check if the Stack is empty.
  isEmpty() {
    return this.stack.length === 0;
  }

  // Get the size of the Stack.
  size() {
    return this.stack.length;
  }

  // Empty the Stack.
  clear() {
    this.stack = [];
  }

  // Print the Stack.
  printStack() {
    console.log(this.stack.join(" "));
  }
}

// Represents a MinMaxStack with basic property: stack, minStack, maxStack.
export class MinMaxStack extends Stack {
  // Creates an instance of MinMaxStack.
  constructor() {
    super();
    this.minStack = [];
    this.maxStack = [];
  }

  // Add an element to the top of the MinMaxStack.
  push(element) {
    this.stack.push(element);
    if (this.minStack.length === 0 || element <= this.getMin()) {
      this.minStack.push(element);
    } else {
      this.minStack.push(this.getMin());
    }
    if (this.maxStack.length === 0 || element >= this.getMax()) {
      this.maxStack.push(element);
    } else {
      this.maxStack.push(this.getMax());
    }
  }

  // Remove and return the top element of the MinMaxStack.
  pop() {
    if (this.stack.length === 0) {
      return "Stack is empty!";
    }
    this.minStack.pop();
    this.maxStack.pop();
    return this.stack.pop();
  }

  // Get the minimum element in the MinMaxStack.
  getMin() {
    if (this.minStack.length === 0) {
      return "Stack is empty!";
    }
    return this.minStack[this.minStack.length - 1];
  }

  // Get the maximum element in the MinMaxStack.
  getMax() {
    if (this.maxStack.length === 0) {
      return "Stack is empty!";
    }
    return this.maxStack[this.maxStack.length - 1];
  }

  // Empty the MinMaxStack.
  clear() {
    this.stack = [];
    this.minStack = [];
    this.maxStack = [];
  }
}
