class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function preorderTraversal(root) {
  if (!root) {
    return [];
  }

  const stack = [root];
  const output = [];

  while (stack.length != 0) {
    root = stack.pop();
    if (root) {
      if (root.right) {
        stack.push(root.right);
      }

      if (root.left) {
        stack.push(root.left);
      }
    }
    output.push(root.val);
  }

  return output;
}
// function preorderTraversal(root) {
//   const result = [];
//   function traverse(node) {
//     if (!node) return;
//     traverse(node.left);
//     result.push(node.val);
//     traverse(node.right);
//   }
//   traverse(root);
//   return result;
// }

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(preorderTraversal(root));
