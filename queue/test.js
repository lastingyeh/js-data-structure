const Queue = require('./linkedList');

const q = new Queue();
q.enqueue('A');
q.enqueue('B');
q.enqueue('C');
q.enqueue('D');
q.enqueue('E');

while (!q.isEmpty()) {
	console.log('dequeue', q.dequeue());
}
