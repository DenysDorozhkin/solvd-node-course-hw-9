// Represents a TreeNode with basic properties: value, left, right.
export class TreeNode {
  // Creates an instance of TreeNode.
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Represents a BinaryTree with basic property: root.
export class BinaryTree {
  // Creates an instance of BinaryTree.
  constructor() {
    this.root = null;
  }

  // Insert a node into the BinaryTree.
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method for node inserting.
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Search for a node in the BinaryTree.
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Helper method for node searching.
  searchNode(node, value) {
    if (node === null) {
      return false;
    }
    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  // In-order traversal.
  inOrderTraversal(callback) {
    this.inOrder(this.root, callback);
  }

  // Helper method for in-order traversal.
  inOrder(node, callback) {
    if (node !== null) {
      this.inOrder(node.left, callback);
      callback(node.value);
      this.inOrder(node.right, callback);
    }
  }

  // Pre-order traversal.
  preOrderTraversal(callback) {
    this.preOrder(this.root, callback);
  }

  // Helper method for pre-order traversal.
  preOrder(node, callback) {
    if (node !== null) {
      callback(node.value);
      this.preOrder(node.left, callback);
      this.preOrder(node.right, callback);
    }
  }

  // Post-order traversal.
  postOrderTraversal(callback) {
    this.postOrder(this.root, callback);
  }

  // Helper method for post-order traversal.
  postOrder(node, callback) {
    if (node !== null) {
      this.postOrder(node.left, callback);
      this.postOrder(node.right, callback);
      callback(node.value);
    }
  }
}

// Function to check if a BinaryTree is a BST.
export function isBST(node, min = null, max = null) {
  if (node === null) {
    return true;
  }
  if (
    (min !== null && node.value <= min) ||
    (max !== null && node.value >= max)
  ) {
    return false;
  }
  return (
    isBST(node.left, min, node.value) && isBST(node.right, node.value, max)
  );
}
