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

function evenOdd(head) {
  if (head === null || head.next === null) {
    return null;
  }
  let evenDummy = new ListNode(0);
  let oddDummy = new ListNode(0);
  let even = evenDummy;
  let odd = oddDummy;
  while (head) {
    if (head.val % 2 === 0) {
      even.next = head;
      even = even.next;
    } else {
      odd.next = head;
      odd = odd.next;
    }
    head = head.next;
  }
  odd.next = null;
  even.next = oddDummy.next;
  return evenDummy.next;
}

let arr = [1, 2, 3, 4, 5]; // Linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = createLinkedList(arr);
printLinkedList(head);
// let isPalindrome = PalindromeLL(head);
// console.log(rev);

// printLinkedList(rev);
let evenOddLL = evenOdd(head);
printLinkedList(evenOddLL);
