const Queue = require('./linkedList');

function primesUpToN(n) {
	let qq = new Queue();

	for (let i = 2; i < n; i++) {
		qq.enqueue(i);
	}

	let primes = [];
	let q2 = new Queue();

	while (qq.size > 0) {
		let prime = qq.dequeue();
		primes.push(prime);

		while (qq.size > 0) {
			let num = qq.dequeue();
			if (num % prime !== 0) {
				q2.enqueue(num);
			}
		}

		[qq, q2] = [q2, qq];
	}

	return primes;
}

console.log('eratosthenes result: ', primesUpToN(25));
