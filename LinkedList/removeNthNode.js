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

// function removeNthNodeFromEnd(head, N) {
//   let dummy = new ListNode(0);
//   dummy.next = head;
//   let slow = dummy;
//   let fast = dummy;
//   console.log(N);
//   for (let i = 0; i <= N; i++) {
//     if (slow === null) return head;
//     slow = slow.next;
//   }
//   console.log(slow);
//   while (slow !== null) {
//     slow = slow.next;
//     fast = fast.next;
//   }
//   fast.next = fast.next.next;
//   return dummy.next;
// }

function removeNthNodeFromFront(head, N) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let slow = dummy;
  for (let i = 0; i < N; i++) {
    if (slow.next === null) return head;
    slow = slow.next;
  }
  if (slow.next !== null) {
    slow.next = slow.next.next;
  }

  return dummy.next;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let head = createLinkedList(arr);
printLinkedList(head);
// let loopLength = removeNthNodeLL(head, 3);
// printLinkedList(loopLength);
let loopLength = removeNthNodeFromFront(head, 3);
printLinkedList(loopLength);
