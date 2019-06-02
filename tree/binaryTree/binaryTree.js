class TreeNode {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}

	add(value, node = this.root) {
		if (!node) {
			this.root = new TreeNode(value);
			return;
		}

		if (node.data < value && node.right === null) {
			node.right = new TreeNode(value);
		} else if (node.data >= value && node.left === null) {
			node.left = new TreeNode(value);
		} else if (node.data < value) {
			this.add(value, node.right);
		} else {
			this.add(value, node.left);
		}
	}

	collect(result = [], node = this.root) {
		if (!node) {
			return result;
		}
		result.push(node.data);
		this.collect(result, node.left);
		this.collect(result, node.right);
		return result;
	}

	contains(value, node = this.root) {
		if (!node) {
			return false;
		}
		if (node.data === value) {
			return true;
		}
		if (node.data >= value) {
			console.log('search left');
			return this.contains(value, node.left);
		}
		console.log('search right');
		return this.contains(value, node.right);
	}
}

module.exports = BinaryTree;
