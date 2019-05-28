function randomSequence(n) {
	const seq = [];
	for (let i = 0; i < n; i++) {
		seq.push(Math.floor(Math.random() * 10));
	}
	return seq;
}

function toArray(s) {
	const arr = [];
	for (let i = 0; i < s.length; i++) {
		arr.push(s.charAt(i));
	}
	return arr;
}

function condense(seq) {
	let c1, c2;
	const rest = Array.isArray(seq) ? seq : toArray(seq);
	let idx = 0;

	while (idx < rest.length - 1) {
		c1 = rest[idx];
		c2 = rest[idx + 1];

		if (c1 === c2) {
			rest.splice(idx, 2);
			idx = 0;
		} else {
			idx++;
		}
	}

	return rest;
}

function condenseNew(seq) {
	const seqs = seq.split('');
	const stack = [seqs.pop()];

	while (seqs.length > 0) {
		let left = seqs.pop();
		let right = stack.pop();

		if (left !== right) {
			stack.push(right);
			stack.push(left);
		}
	}

	while(stack.length > 0){
		seqs.push(stack.pop())
	}
	return seqs.join('');
}

module.exports = {
	exec() {
		const seq = randomSequence(10);
		const seq2 = '16543223456';

		const result = condense(seq);
		console.log('seq:', seq, '\nresult:', result.join(''));
	},
	exec2() {
		const seq = '54322346';
		console.log('seq: ',seq )
		console.log('new condense result', condenseNew(seq));
	},
};
