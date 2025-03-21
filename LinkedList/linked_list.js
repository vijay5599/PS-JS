/*JS boiler code for Linked list*/
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

//Insert in LL
var insertHeadAtFront = function (head, node) {
  let dummy = new ListNode(node);
  dummy.next = head;
  return dummy;
};

var insertHeadAtEnd = function (head, node) {
  let dummy = head;
  while (dummy.next !== null) {
    dummy = dummy.next;
  }
  dummy.next = node;
  return head;
};

var deleteNode = function (head) {
  let dummy = head;
  while (dummy.next.next !== null) {
    dummy = dummy.next;
  }
  dummy.next = null;
  return head;
};

var lengthOfLL = function (head) {
  let count = 0;
  let dummy = head;
  while (dummy) {
    dummy = dummy.next;
    count += 1;
  }
  return count;
};

var searchNode = function (head, val) {
  let dummy = head;
  while (dummy) {
    if (dummy.val === val) {
      return true;
    }
    dummy = dummy.next;
  }
  return false;
};

var middleOfLL = function (head) {
  let slow = head;
  let fast = head;
  while (fast.next && fast) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};



// Example usage
let arr = [1, 2, 3, 4]; // Linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = createLinkedList(arr);
printLinkedList(head);
let LLF = insertHeadAtFront(head, 6);
printLinkedList(LLF);
let newNode = new ListNode(7);
let LLE = insertHeadAtEnd(head, newNode);
printLinkedList(LLE);

// // let deleteNod = deleteNode(head);
// printLinkedList(deleteNod);

// let length = lengthOfLL(head);
// console.log(length);

// let search = searchNode(head, 6);
// console.log(search);

// let middle = middleOfLL(head);
// console.log(middle.val); // Output: 3
