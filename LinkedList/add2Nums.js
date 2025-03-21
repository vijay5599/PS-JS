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

function add2Nums(l1, l2) {
  let res = new ListNode(0);
  let curr = res;

  let sum = 0;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry > 0) {
    sum = carry;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
  }
  return res.next;
}

let arr1 = [9, 1, 3];
let head1 = createLinkedList(arr1);
printLinkedList(head1);
let arr2 = [3, 4, 6];
let head2 = createLinkedList(arr2);
printLinkedList(head2);

let sum = add2Nums(head1, head2);
printLinkedList(sum);
