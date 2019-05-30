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
}

module.exports = { TreeNode, Tree };
