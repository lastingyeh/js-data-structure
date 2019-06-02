class TreeNode {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

class Tree {
	constructor() {
		this.root = null;
		this.nodes = [];
		this.data = null;
	}

	// visit each node and add data
	// value to array and return it
	collect(current = this.root) {
		if (!current) {
			return current;
		}

		this.nodes.push(current.data);

		this.collect(current.left);
		this.collect(current.right);

		return this.nodes;
	}

	sum(node = this.root) {
		if (!node) {
			return 0;
		}
		return node.data + this.sum(node.left) + this.sum(node.right);
	}

	contains(value, node = this.root) {
		if (!node) {
			return false;
		}

		if (node.data === value) {
			return true;
		}

		return this.contains(value, node.left) || this.contains(value, node.right);
	}

	size(node = this.root) {
		if (!node) {
			return 0;
		}
		return 1 + this.size(node.left) + this.size(node.right);
	}

	// leaf must have no children -> node.left & node.right both equeal null
	leaves(node = this.root) {
		if (!node) {
			return 0;
		}
		if (!node.left && !node.right) {
			return 1;
		}
		return this.leaves(node.left) + this.leaves(node.right);
	}

	min(node = this.root) {
		if (!node) {
			return 0;
		}

		if (this.data === null) {
			this.data = node.data;
		} else if (node.data < this.data) {
			this.data = node.data;
		}

		this.min(node.left);
		this.min(node.right);

		return this.data;
	}

	max(node = this.root) {
		if (!node) {
			return 0;
		}

		if (this.data === null) {
			this.data = node.data;
		} else if (node.data > this.data) {
			this.data = node.data;
		}

		this.max(node.left);
		this.max(node.right);

		return this.data;
	}

	height(node = this.root) {
		if (!node) {
			return 0;
		}

		let left = this.height(node.left);
		let right = this.height(node.right);

		if (left > right) {
			return left + 1;
		}
		return right + 1;
	}
}

module.exports = { TreeNode, Tree };
