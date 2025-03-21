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

//external space TC => O(N)
function revLL(head) {
  let stack = [];
  let tmp = head;
  while (tmp) {
    stack.push(tmp.val);
    tmp = tmp.next;
  }
  tmp = head;
  while (tmp) {
    tmp.val = stack.pop();
    tmp = tmp.next;
  }
  return head;
}

function reve(head) {
  let prev = null;
  let temp = head;
  while (temp) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  return prev;
}

let arr = [1, 2, 3, 4]; // Linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = createLinkedList(arr);
printLinkedList(head);
let rev = revLL(head);
printLinkedList(rev);
let rev1 = reve(head);
printLinkedList(rev1);
