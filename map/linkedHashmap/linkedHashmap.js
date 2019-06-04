class ListNode {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.root = null;
	}

	isEmpty() {
		return this.root === null;
	}

	prepend(value) {
		let node = new ListNode(value, this.root);
		this.root = node;
	}
}

class LinkedHashMap {
	constructor() {
		this.buckets = new Array(7);

		for (let i = 0; i < this.buckets.length; i++) {
			this.buckets[i] = new LinkedList();
		}
	}

	hash(str) {
		str = str.toLowerCase();
		const ALBHABET = 'qwertyuiopasdfghjklzxcvbnm';
		let sum = 0;

		for (let i = 0; i < str.length; i++) {
			sum += ALBHABET.indexOf(str.charAt(i));
		}
		return sum;
	}

	hashCode(key) {
		let index = this.hash(key) % this.buckets.length;
		return index;
	}

	put(key, value) {
		let index = this.hashCode(key);
		this.buckets[index].prepend({ key, value });
	}

	get(key) {
		let index = this.hashCode(key);
		let list = this.buckets[index];

		let current = list.root;
		while (current !== null) {
			console.log(`[ListNode] => ["${current.data.key}"] = ${current.data.value}`);
			if (current.data.key === key) {
				return current.data.value;
			}
			current = current.next;
		}
	}
}

module.exports = LinkedHashMap;
