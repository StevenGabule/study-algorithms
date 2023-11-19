const getDuplicate = function (nums) {
	let hare = 0;
	let tortoise = 0;

	while (true) {
		hare = nums[nums[hare]];
		tortoise = nums[tortoise];

		if (hare === tortoise) {
			let pointer = 0;
			while (pointer !== tortoise) {
				pointer = nums[pointer];
				tortoise = nums[tortoise];
			}
			return pointer;
		}
	}
}

// console.log(getDuplicate([4, 3, 1, 2, 3]));
// console.log(getDuplicate([4, 5, 3, 3, 2, 3, 5, 5]));

// question 2 add numbers
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	addAtTail(value) {
		const node = new Node(value)
		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.size++;
		return this;
	}
}

const add2Numbers = function (l1, l2) {
	let carryForward = 0;
	const results = new LinkedList()
	while (l1 || l2 || carryForward) {
		let l1Value = l1 ? l1.value : 0;
		let l2Value = l2 ? l2.value : 0;
		let sum = (l1Value + l2Value + carryForward);
		let nodeValueInResult = sum % 10;
		results.addAtTail(nodeValueInResult)
		carryForward = Math.floor(sum / 10)
		l1 = l1 ? l1.next : null;
		l2 = l2 ? l2.next : null;
	}
	return results;
}

const n1 = new LinkedList();
const n2 = new LinkedList();

n1.addAtTail(0);
n1.addAtTail(4);
n1.addAtTail(5);

n2.addAtTail(3);
n2.addAtTail(2);
n2.addAtTail(7);

console.log(add2Numbers(n1.head, n2.head));