class ListNode {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.root = null;
		this.size = 0;
	}

	// O(1) constant time
	// add a value to the front of the list
	prepend(data) {
		let node = new ListNode(data);
		node.next = this.root;
		this.root = node;

		this.size++;
	}

	// O(N) linear time
	append(data) {
		this.addAtIndex(this.size - 1, data);
	}

	// O(N) linear time
	// return the size of the list
	length() {
		let current = this.root;
		let count = 0;

		while (current !== null) {
			count++;
			current = current.next;
		}
		return count;
	}

	// O(N) linear time
	// return a string representing the list
	toString() {
		let current = this.root;
		let result = 'root -> ';

		while (current !== null) {
			result += current.data + ' -> ';
			current = current.next;
		}

		return result + 'null';
	}

	isEmpty() {
		return this.root === null;
	}

	// O(N) linear time
	get(index) {
		let current = this.root;
		let count = 0;

		while (current !== null) {
			if (count === index) {
				return current.data;
			}
			count++;
			current = current.next;
		}
		return null;
	}
	// O(N) linear time
	removeAtIndex(index) {
		if (index < 0 || index >= this.size) {
			return;
		}

		if (index === 0) {
			this.removeFront();
		} else {
			this.removeRest(index);
		}
		this.size--;
	}

	removeFront() {
		if (this.root != null) {
			this.root = this.root.next;
		}
	}
	// depend on serach -> O(N)
	removeRest(index) {
		let current = this.root;
		let i = 0;
		while (current !== null && i < index - 1) {
			i++;
			current = current.next;
		}
		current.next = current.next.next;
	}
	// O(N) linear time
	addAtIndex(index, value) {
		if (index > this.length() || index < 0) {
			throw new Error('out of index');
		}
		const lastFlag = index === this.size - 1 ? 0 : 1;

		switch (index) {
			case 0:
				this.prepend(value);
				break;
			default:
				let current = this.root;
				let i = 0;
				while (current && i < index - lastFlag) {
					i++;
					current = current.next;
				}

				let node = new ListNode(value);
				node.next = current.next;
				current.next = node;
				this.size++;
				break;
		}
	}
}

module.exports = LinkedList;
