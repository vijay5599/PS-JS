class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// function searchBST(root, val) {
//   if (root === null) return;
//   if (root.val === val) return root;
//   if (root.val > val) return searchBST(root.left, val);
//   else return searchBST(root.right, val);
// }

function searchBST(root, val) {
  while (root.val !== val && root !== null) {
    root = root.val > val ? root.left : root.right;
  }
  return root;
}

// Example usage:
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(searchBST(root, 2));
