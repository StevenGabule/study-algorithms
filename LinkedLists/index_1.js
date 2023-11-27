class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

function reverseLinkedLists(head) {
  let prev = null;
  let current = head;
  while (current)  {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

// console.log(head);
console.log(reverseLinkedLists(head))
// console.log(reverseLinkedLists(null))

// pointers: prev, curr, next
// input: 1->2->3->4->null
// result: 4->3->2->1->null