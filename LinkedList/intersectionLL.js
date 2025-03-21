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

function intersectionInLL(l1, l2) {
  let lenOfL1 = helperFindLength(l1);
  let lenOfL2 = helperFindLength(l2);
  let diff = Math.abs(lenOfL1 - lenOfL2);

  // Advance the pointer of the longer list by the difference in lengths
  if (lenOfL1 > lenOfL2) {
    for (let i = 0; i < diff; i++) {
      l1 = l1.next;
    }
  } else {
    for (let i = 0; i < diff; i++) {
      l2 = l2.next;
    }
  }

  // Traverse both lists together until we find the intersection
  while (l1 !== null && l2 !== null) {
    if (l1 === l2) {
      return l1.val; // Return the value at the intersection node
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  return -1; // Return -1 if there is no intersection
}

function helperFindLength(head) {
  let counter = 0;
  while (head) {
    counter += 1;
    head = head.next;
  }
  return counter;
}

// Optmized Approach
function getInter(headA, headB) {
  let ptrA = headA;
  let ptrB = headB;

  while (ptrA !== ptrB) {
    ptrA = ptrA ? ptrA.next : headB;
    ptrB = ptrB ? ptrB.next : headA;
  }
  return ptrA.val;
}

// Function to calculate x raised to the power n
function pow(x, n) {
  if (n === 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let result = 1;
  while (n > 0) {
    if (n % 2 === 1) {
      result *= x;
    }
    x *= x;
    n = Math.floor(n / 2);
  }
  return result;
}

//Detect loop
let arr1 = [1, 3, 1, 2, 4];
let head1 = createLinkedList(arr1);
printLinkedList(head1);
let arr2 = [3, 2, 4];
let head2 = createLinkedList(arr2);
printLinkedList(head2);

head2.next.next = head1.next.next.next;

let intersectVal1 = getInter(head1, head2);
console.log(intersectVal1);

// Example usage of pow function
console.log(pow(2, 3)); // Output: 8
console.log(pow(2, -2)); // Output: 0.25
