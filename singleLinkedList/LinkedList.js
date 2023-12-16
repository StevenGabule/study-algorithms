const lengthOfList = (head) => {
	let length = 0;
	let curr = head;

	while (curr) {
		length++;
		curr = curr.next;
	}

	return length;
}
