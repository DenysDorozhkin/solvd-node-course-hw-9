<h3 align="center">Data structures</h3>

---

<p align="center"> This repository contains implementations of several fundamental data structures and algorithms in JavaScript.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Classes](#classes)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This JavaScript project presents a collection of data structures and algorithms, including implementations for binary trees, graphs, linked lists, queues, and stacks. Each class and function is designed to handle specific tasks efficiently, such as inserting and searching elements, performing traversals, detecting cycles, and finding shortest paths. With clear documentation and practical usage examples, this project provides a robust foundation for implementing essential data structure operations and algorithms, ensuring flexibility for customization and seamless integration into various applications.

## 🏁 Getting Started <a name = "getting_started"></a>

```
git clone https://github.com/DenysDorozhkin/solvd-node-course-hw-9.git
```

```
cd solvd-node-course-hw-9
```

## 🔧 Classes <a name = "classes"></a>

Binary Tree

A binary tree is a data structure in which each node has at most two children, referred to as the left child and the right child.

TreeNode Class

Represents a node in the binary tree.

Methods

- constructor(value): Initializes a new node with the given value.

BinaryTree Class

Represents a binary tree.

Methods

- constructor(): Initializes an empty binary tree.
- insert(value): Inserts a value into the binary tree.
- insertNode(node, newNode): Helper method to insert a node in the correct position.
- search(value): Searches for a value in the binary tree.
- searchNode(node, value): Helper method to search for a value starting from the given node.
- inOrderTraversal(callback): Traverses the tree in order and applies a callback to each node's value.
- inOrder(node, callback): Helper method for in-order traversal.
- preOrderTraversal(callback): Traverses the tree in pre-order and applies a callback to each node's value.
- preOrder(node, callback): Helper method for pre-order traversal.
- postOrderTraversal(callback): Traverses the tree in post-order and applies a callback to each node's value.
- postOrder(node, callback): Helper method for post-order traversal.

isBST Function

Checks if a binary tree is a binary search tree (BST).

Parameters

- node: The root node of the binary tree.
- min: Minimum allowed value for the node.
- max: Maximum allowed value for the node.

Returns

- true if the tree is a BST, false otherwise.

Time Complexity

- Insertion, Search: O(log n) on average for balanced trees, O(n) in the worst case for unbalanced trees.
- Traversal: O(n).

---

Graph

A graph is a data structure that consists of a set of vertices (or nodes) and a set of edges that connect pairs of vertices.

Graph Class

Represents an unweighted graph.

Methods

- constructor(): Initializes an empty graph.
- addVertex(vertex): Adds a vertex to the graph.
- addEdge(vertex1, vertex2): Adds an edge between two vertices.
- dfs(start): Performs depth-first search starting from the given vertex.
- bfs(start): Performs breadth-first search starting from the given vertex.

WeightedGraph Class

Represents a weighted graph.

Methods

- constructor(): Initializes an empty weighted graph.
- addVertex(vertex): Adds a vertex to the graph.
- addEdge(vertex1, vertex2, weight): Adds a weighted edge between two vertices.
- dijkstra(start, finish): Finds the shortest path between two vertices using Dijkstra's algorithm.
- bfsShortestPath(start, finish): Finds the shortest path between two vertices using BFS.

Time Complexity

- DFS, BFS: O(V + E), where V is the number of vertices and E is the number of edges.
- Dijkstra's Algorithm: O((V + E) log V).

---

Linked List

A linked list is a linear data structure where each element is a separate object called a node, which contains a value and a reference to the next node in the sequence.

Node Class

Represents a node in the linked list.

Methods

- constructor(value): Initializes a new node with the given value.

LinkedList Class

Represents a linked list.

Methods

- constructor(): Initializes an empty linked list.
- insert(value): Inserts a value at the end of the linked list.
- delete(value): Deletes the first occurrence of the given value from the linked list.
- search(value): Searches for a value in the linked list.
- hasCycle(): Detects if the linked list has a cycle.
- createCycle(pos): Creates a cycle in the linked list at the specified position.
- printList(): Prints the linked list.

Time Complexity

- Insertion, Deletion, Search: O(n).

---

Queue

A queue is a linear data structure that follows the First In First Out (FIFO) principle.

Queue Class

Represents a basic queue.

Methods

- constructor(): Initializes an empty queue.
- enqueue(element): Adds an element to the end of the queue.
- dequeue(): Removes and returns the first element of the queue.
- peek(): Returns the first element of the queue without removing it.
- isEmpty(): Checks if the queue is empty.
- size(): Returns the number of elements in the queue.
- printQueue(): Prints the queue.

PriorityQueue Class

Represents a priority queue where each element has a priority.

Methods

- enqueue(val, priority): Adds an element to the queue with a given priority.
- dequeue(): Removes and returns the element with the highest priority.
- sort(): Sorts the queue based on priority.

Time Complexity

- Enqueue, Dequeue, Peek: O(1) for basic queue. O(log n) for priority queue operations due to sorting.

---

Stack

A stack is a linear data structure that follows the Last In First Out (LIFO) principle.

Stack Class

Represents a basic stack.

Methods

- constructor(): Initializes an empty stack.
- push(element): Adds an element to the top of the stack.
- pop(): Removes and returns the top element of the stack.
- peek(): Returns the top element of the stack without removing it.
- isEmpty(): Checks if the stack is empty.
- size(): Returns the number of elements in the stack.
- clear(): Clears the stack.
- printStack(): Prints the stack.

MinMaxStack Class

Extends the basic stack to support O(1) retrieval of the minimum and maximum elements.

Methods

- push(element): Adds an element to the stack and updates the min and max stacks.
- pop(): Removes and returns the top element of the stack and updates the min and max stacks.
- getMin(): Returns the minimum element in the stack.
- getMax(): Returns the maximum element in the stack.
- clear(): Clears the stack and the min and max stacks.

Time Complexity

- Push, Pop, Peek: O(1).
- Get Min, Get Max: O(1)

## 🎈 Usage <a name = "usage"></a>

Binary Tree Example

```
import { BinaryTree, TreeNode, isBST } from './data-structures/binary-tree.js';

// Creating a binary tree
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

// Searching in the binary tree
const found = tree.search(7); // Returns true
const notFound = tree.search(20); // Returns false

// In-order traversal
tree.inOrderTraversal((value) => console.log(value)); // Output: 3, 5, 7, 10, 15

// Checking if the tree is a BST
const isBinarySearchTree = isBST(tree.root); // Returns true
```

Graph Example

```
import { Graph } from './data-structures/graph.js';

// Creating a graph
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');

// Performing DFS and BFS
const dfsResult = graph.dfs('A'); // Output: ['A', 'B', 'C']
const bfsResult = graph.bfs('A'); // Output: ['A', 'B', 'C']

// Weighted Graph Example
import { WeightedGraph } from './data-structures/graph.js';

// Creating a weighted graph
const weightedGraph = new WeightedGraph();
weightedGraph.addVertex('A');
weightedGraph.addVertex('B');
weightedGraph.addVertex('C');
weightedGraph.addEdge('A', 'B', 1);
weightedGraph.addEdge('A', 'C', 4);
weightedGraph.addEdge('B', 'C', 2);

// Finding the shortest path using Dijkstra's algorithm
const shortestPath = weightedGraph.dijkstra('A', 'C'); // Output: ['A', 'B', 'C']
```

Linked List Example

```
import { LinkedList } from './data-structures/linked-list.js';

// Creating a linked list
const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);

// Searching in the linked list
const foundNode = list.search(2); // Returns the node with value 2
const notFoundNode = list.search(4); // Returns null

// Detecting cycle in the linked list
const hasCycle = list.hasCycle(); // Returns false
```

Queue Example

```
import { Queue, PriorityQueue } from './data-structures/queue.js';

// Creating a queue
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1

// Creating a priority queue
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('A', 2);
priorityQueue.enqueue('B', 1);
priorityQueue.enqueue('C', 3);
console.log(priorityQueue.dequeue().val); // Output: 'B'
```

Stack Example

```
import { Stack, MinMaxStack } from './data-structures/stack.js';

// Creating a stack
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3

// Creating a min-max stack
const minMaxStack = new MinMaxStack();
minMaxStack.push(1);
minMaxStack.push(5);
minMaxStack.push(3);
console.log(minMaxStack.getMin()); // Output: 1
console.log(minMaxStack.getMax()); // Output: 5
```

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - App Environment

## ✍️ Authors <a name = "authors"></a>

- https://github.com/DenysDorozhkin
