class ListNode {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}

	print(tag) {
		let current = this;
		let result = '';
		while (current != null) {
			result += current.data + ' -> ';
			current = current.next;
		}
		result += 'null';

		console.log(tag);
		console.log(result);
		console.log('-------------');
	}
}

// start: null
// end: 1 -> 2 -> 3
function problem1() {
	let root = null;

	let n1 = new ListNode(1);
	let n2 = new ListNode(2);
	let n3 = new ListNode(3);

	root = n1;
	n1.next = n2;
	n2.next = n3;

	root.print('problem1');
}

// start: 1 -> 2 -> 3
// end: 0 -> 1 -> 2 -> 3
function problem2() {
	let root = new ListNode(1, new ListNode(2, new ListNode(3)));

	root.print('problem2 before');

	let zero = new ListNode(0);
	zero.next = root;
	root = zero;

	root.print('problem2 after');
}

// start: 1 -> 3 -> 4 -> null
// end: 1 -> 2 -> 3 -> 4 -> null
function problem3() {
	let root = new ListNode(1);
	root.next = new ListNode(3);
	root.next.next = new ListNode(4);

	root.print('problem3 before');

	let n2 = new ListNode(2);
	n2.next = root.next;
	root.next = n2;

	root.print('problem3 after');
}

// start: 1 -> 2 -> 3
// end: 1 -> 2 -> 3 -> 4
function problem4() {
	let root = new ListNode(1, new ListNode(2, new ListNode(3)));
	root.print('problem4 before');
	root.next.next.next = new ListNode(4);
	root.print('problem4 after');
}

// start: 1 -> 99 -> 2 -> 3
// end: 1 -> 2 -> 3
function problem5() {
	let root = new ListNode(
		1,
		new ListNode(99, new ListNode(2, new ListNode(3))),
	);
	root.print('problem 5 before');

	root.next = root.next.next;

	root.print('problem 5 after');
}

problem1();
problem2();
problem3();
problem4();
problem5();
