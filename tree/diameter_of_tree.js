class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val; // Value of the node
    this.left = left; // Left child of the node
    this.right = right; // Right child of the node
  }
}

function diameter_of_tree(root) {
  let diameter = 0;
  // Helper function to check the balance of the tree and calculate depth
  function dfs(node) {
    if (!node) return 0;
    let left_depth = dfs(node.left); // Recursively check left subtree
    let right_depth = dfs(node.right); // Recursively check right subtree

    diameter = Math.max(diameter, left_depth + right_depth);
    return 1 + Math.max(left_depth, right_depth);
  }
  dfs(root);
  return diameter;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.left.left = new TreeNode(8);

console.log(diameter_of_tree(root)); // false (tree is unbalanced)

const balancedRoot = new TreeNode(1);
balancedRoot.left = new TreeNode(2);
balancedRoot.right = new TreeNode(3);
balancedRoot.left.left = new TreeNode(4);
balancedRoot.left.right = new TreeNode(5);

console.log(diameter_of_tree(balancedRoot)); // true (tree is balanced)
