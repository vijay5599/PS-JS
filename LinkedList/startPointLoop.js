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

// function startPOintOfLoopInLL(head) {
//   let visited = new Map();
//   let temp = head;
//   let res = -1;
//   while (temp) {
//     if (visited.get(temp.val)) {
//       return temp.val;
//     }
//     visited.set(temp.val, true);
//     temp = temp.next;
//   }
//   return res;
// }

function startPOintOfLoopInLL(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow.val;
    }
  }
  return 0;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let head = createLinkedList(arr);
let tail = head;
while (tail.next) {
  tail = tail.next;
}
tail.next = head.next.next; // Creating a loop at node with value 3
let loopLength = startPOintOfLoopInLL(head);
console.log(loopLength);
