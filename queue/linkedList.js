class QueueNode {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

class Queue {
	constructor() {
		this.front = null;
		this.tail = null;
		this.size = 0
	}

	enqueue(value) {
		let node = new QueueNode(value);

		if (this.isEmpty()) {
			this.front = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.size++
	}

	dequeue() {
		if (this.isEmpty()) {
			return null;
		}

		let result = this.front.data;

		if (this.front === this.tail) {
			this.front = null;
			this.tail = null;
		} else {
			this.front = this.front.next;
		}
		this.size--
		
    return result
	}

	isEmpty() {
		return this.front === null;
	}
}

module.exports = Queue;
