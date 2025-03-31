class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function max_depth(root) {
  if (!root) {
    return [];
  }

  let queue = [];
  let level = 0;
  queue.push(root);
  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      let q = queue.shift();
      if (q.right) {
        queue.push(q.right);
      }
      if (q.left) {
        queue.push(q.left);
      }
    }
    level++;
  }
  return level;
}

function max_depth(root) {
  if (!root) return 0;
  let left_depth = max_depth(root.left);
  let right_depth = max_depth(root.right);
  return 1 + Math.max(left_depth, right_depth);
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(max_depth(root));
