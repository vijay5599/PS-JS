// Definition for a singly linked list node
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to print a linked list from a given node
function printLinkedList(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join(" -> "));
}

function detectLoopInLL(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return [fast, slow];
    }
  }
}

// // first implementation TC=> O(N) SC=> O(N)
// function lengthOfLoopInLL(head) {
//   let visited = new Map();
//   let temp = head;
//   let timer = 0;
//   let res = -1;
//   while (temp) {
//     timer += 1;
//     if (visited.get(temp.val)) {
//       res = timer - visited.get(temp.val);
//     }
//     visited.set(temp.val, timer);
//     temp = temp.next;
//   }
//   return res;
// }

// second implementation => TC=> O(N) SC=> O(1)

function lengthOfLoopInLL(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      return helperFindLength(slow);
    }
  }
  return 0;
}

function helperFindLength(slow) {
  let counter = 1;
  let fast = slow.next;
  while (slow !== fast) {
    counter += 1;
    fast = fast.next;
  }
  return counter;
}

//Detect loop
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let head = createLinkedList(arr);
let tail = head;
while (tail.next) {
  tail = tail.next;
}
tail.next = head.next.next; // Creating a loop at node with value 3
let loopLength = detectLoopInLL(head);
console.log(loopLength);

// // For first implementation
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3];
// let head = createLinkedList(arr);
// let loopLength = lengthOfLoopInLL(head);
// console.log(loopLength);

// For second implementation
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let head = createLinkedList(arr);
// let tail = head;
// while (tail.next) {
//   tail = tail.next;
// }
// tail.next = head.next.next; // Creating a loop at node with value 3

// // Test the lengthOfLoopInLL function
// let loopLength = lengthOfLoopInLL(head);
// console.log(loopLength);
