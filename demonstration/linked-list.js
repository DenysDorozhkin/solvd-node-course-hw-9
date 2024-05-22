import { LinkedList } from "../data-structures/linked-list.js";

// Linked list usage example:
const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.printList();

console.log(list.search(2));
console.log(list.search(4));

list.delete(2);
list.printList();

// Linked list cycle usage example:
const cycledList = new LinkedList();
cycledList.insert(1);
cycledList.insert(2);
cycledList.insert(3);
cycledList.insert(4);
cycledList.insert(5);
cycledList.printList();
console.log(cycledList.hasCycle());

cycledList.createCycle(2);
cycledList.printList();
console.log(cycledList.hasCycle());
