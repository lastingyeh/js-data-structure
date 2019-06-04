class HashMap {
	constructor() {
		this.delta = 3;
		this.maxProbes = 3;
		this.buckets = new Array(7);

		// initial value
		for (let i = 0; i < this.buckets.length; i++) {
			this.buckets[i] = null;
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

	hashcode(key) {
		let index = this.hash(key) % this.buckets.length;
		return index;
	}

	put(key, value) {
		let index = this.hashcode(key);

		if (this.buckets[index] === null) {
			this.buckets[index] = { key, value };
			return;
		}

		let attempt = 0;
		while (attempt < this.maxProbes) {
			index = (index + this.delta) % this.buckets.length;
			if (this.buckets[index] === null) {
				this.buckets[index] = { key, value };
				return;
			}
			attempt++;
		}
	}

	get(key) {
		let index = this.hashcode(key);

		let attempts = 0;
		while (attempts < this.maxProbes) {
			if (this.buckets[index] && this.buckets[index].key === key) {
				return this.buckets[index].value;
			}
			index = (index + this.delta) % this.buckets.length;
			attempts++;
		}
	}

	remove(key) {
		let index = this.hashcode(key);

		let attempts = 0;
		while (attempts < this.maxProbes) {
			if (this.buckets[index] && this.buckets[index].key === key) {
				return (this.buckets[index] = null);
			}
			index = (index + this.delta) % this.buckets.length;
			attempts++;
		}
	}
}

module.exports = HashMap;
