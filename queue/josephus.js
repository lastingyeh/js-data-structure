const Queue = require('./linkedList');

function josephus(choices, n) {
	let qq = new Queue();

	for (let choice of choices) {
		qq.enqueue(choice);
  }
  
  qq.enqueue(qq.dequeue())

	let count = 1;
	while (qq.size > 1) {
		const choice = qq.dequeue();
		if (count % n !== 0) {
			qq.enqueue(choice);
		}
		count++;
	}
	return qq.dequeue();
}

const choices = 'ABCDEF'.split('');
console.log('n=3 ', josephus(choices, 3));
console.log('n=4 ', josephus(choices, 4));
