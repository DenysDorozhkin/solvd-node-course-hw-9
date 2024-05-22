import { Stack, MinMaxStack } from "../data-structures/stack.js";

// Stack usage example:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
stack.printStack();

// Min-max stack usage example:
const minMaxStack = new MinMaxStack();
minMaxStack.push(10);
minMaxStack.push(20);
minMaxStack.push(5);
minMaxStack.push(30);
console.log(minMaxStack.getMin());
console.log(minMaxStack.getMax());
console.log(minMaxStack.pop());
console.log(minMaxStack.getMin());
console.log(minMaxStack.getMax());
minMaxStack.printStack();
