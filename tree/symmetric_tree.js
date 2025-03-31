class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val; // Value of the node
    this.left = left; // Left child of the node
    this.right = right; // Right child of the node
  }
}

function symetric_tree(root) {
  if (root === null) return false;
  return same_tree(root.left, root.right);
}

function same_tree(node1, node2) {
  if (node1 === null && node2 === null) return true;
  if (node1 === null || node2 === null) return false;
  return (
    node1.val === node2.val &&
    same_tree(node1.left, node2.right) &&
    same_tree(node1.right, node2.left)
  );
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(symetric_tree(root));
