// Represents a Node with basic properties: value, next.
class Node {
  // Creates an instance of Node.
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Represents a LinkedList with basic property: head.
export class LinkedList {
  // Creates an instance of LinkedList.
  constructor() {
    this.head = null;
  }

  // Insert a node at the end of the list.
  insert(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Delete a node with a specific value.
  delete(value) {
    if (this.head === null) return;

    let slow = this.head;
    let fast = this.head;
    let cycleDetected = false;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        cycleDetected = true;
        break;
      }
    }

    if (cycleDetected) {
      slow = this.head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }

      let cycleStart = slow;
      let previous = null;
      do {
        previous = slow;
        slow = slow.next;
      } while (slow !== cycleStart);

      previous.next = null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next !== null && current.next.value !== value) {
      current = current.next;
    }

    if (current.next === null) {
      console.log("Node with value", value, "not found!");
      return;
    }

    current.next = current.next.next;
  }

  // Search a node with a specific value.
  search(value) {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        slow = this.head;
        while (slow !== fast) {
          slow = slow.next;
          fast = fast.next;
        }

        let cycleStart = slow;
        do {
          if (slow.value === value) {
            return slow;
          }
          slow = slow.next;
        } while (slow !== cycleStart);

        return null;
      }
    }

    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  // Detect if the LinkedList has a cycle using Floyd's Cycle Detection Algorithm.
  hasCycle() {
    if (this.head === null) return false;
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }

  // Create a cycle in the LinkedList.
  createCycle(pos) {
    if (pos < 0) return;
    let cycleNode = null;
    let current = this.head;
    let index = 0;
    while (current.next !== null) {
      if (index === pos) {
        cycleNode = current;
      }
      current = current.next;
      index++;
    }
    if (cycleNode) {
      current.next = cycleNode;
    }
  }

  // Print the LinkedList.
  printList() {
    let current = this.head;
    let list = "";
    let visitedNodes = new Set();
    while (current !== null) {
      if (visitedNodes.has(current)) {
        list += `(${current.value} -> cycle starts here)`;
        break;
      }
      visitedNodes.add(current);
      list += current.value + " -> ";
      current = current.next;
    }
    if (current === null) {
      list += "null";
    }
    console.log(list);
  }
}
