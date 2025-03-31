class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val; // Value of the node
    this.left = left; // Left child of the node
    this.right = right; // Right child of the node
  }
}

function balanced_tree(root) {
  // Helper function to check the balance of the tree and calculate depth
  function check_balance(node) {
    if (!node) return 0; // Base case: null node has depth 0

    let left_depth = check_balance(node.left); // Recursively check left subtree
    if (left_depth === -1) return -1; // If left subtree is unbalanced, propagate -1

    let right_depth = check_balance(node.right); // Recursively check right subtree
    if (right_depth === -1) return -1; // If right subtree is unbalanced, propagate -1

    // If the difference in depths is greater than 1, the tree is unbalanced
    if (Math.abs(left_depth - right_depth) > 1) return -1;

    // Return the depth of the current subtree
    return 1 + Math.max(left_depth, right_depth);
  }

  // If the helper function returns -1, the tree is unbalanced
  return check_balance(root) !== -1;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.left.left = new TreeNode(8);

console.log(balanced_tree(root)); // false (tree is unbalanced)

const balancedRoot = new TreeNode(1);
balancedRoot.left = new TreeNode(2);
balancedRoot.right = new TreeNode(3);
balancedRoot.left.left = new TreeNode(4);
balancedRoot.left.right = new TreeNode(5);

console.log(balanced_tree(balancedRoot)); // true (tree is balanced)
