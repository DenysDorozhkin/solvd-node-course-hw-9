import { TreeNode, BinaryTree, isBST } from "../data-structures/binary-tree.js";

// Binary tree usage example:
const tree = new BinaryTree();
tree.insert(5);
tree.insert(2);
tree.insert(12);
tree.insert(1);
tree.insert(7);
tree.insert(18);
tree.insert(3);
tree.insert(6);
tree.insert(15);

console.log("In-order traversal:");
tree.inOrderTraversal((value) => console.log(value));

console.log("Pre-order traversal:");
tree.preOrderTraversal((value) => console.log(value));

console.log("Post-order traversal:");
tree.postOrderTraversal((value) => console.log(value));

console.log("Search for 6:", tree.search(6));
console.log("Search for 17:", tree.search(17));

// IsBST usage example:
const isBTSTree = new BinaryTree();
isBTSTree.root = new TreeNode(8);
isBTSTree.root.left = new TreeNode(3);
isBTSTree.root.right = new TreeNode(10);
isBTSTree.root.left.left = new TreeNode(1);
isBTSTree.root.left.right = new TreeNode(6);
isBTSTree.root.right.right = new TreeNode(14);
isBTSTree.root.left.right.left = new TreeNode(4);
isBTSTree.root.left.right.right = new TreeNode(5);
isBTSTree.root.right.right.left = new TreeNode(13);

console.log("Is the tree a BST?", isBST(isBTSTree.root));
