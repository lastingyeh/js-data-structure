class Graph {
	constructor() {
		this.edges = {};
	}

	addNode(node) {
		if (!this.edges[node]) {
			this.edges[node] = [];
		}
	}

	addEdge(start, end) {
		this.edges[start].push(end);
	}

	addBidirectionalEdge(n1, n2) {
		this.addEdge(n1, n2);
		this.addEdge(n2, n1);
	}

	getNeighbors(start) {
		return this.edges[start];
	}

	breadthFirstTraversal(start) {
		// pick a node to start with and add it to queue
		let qq = [start];
		// keep track of nodes we've visited
		let visited = {};

		while (qq.length > 0) {
			// dequeue one node at a time
			let node = qq.shift();
			console.log(node);

			// mark it as visited
			visited[node] = true;

			// get it's neighbors and add them to the queue
			// only adding nodes that haven't been visited
			for (let neighbor of this.getNeighbors(node)) {
				if (!visited[neighbor]) {
					qq.push(neighbor);
					visited[neighbor] = true;
				}
			}
		}
	}

	depthFirstTraversal(start) {
		// pick a node to start with and add it to queue
		let qq = [start];
		// keep track of nodes we've visited
		let visited = {};

		while (qq.length > 0) {
			// dequeue one node at a time
			let node = qq.pop();
			console.log(node);

			// mark it as visited
			visited[node] = true;

			// get it's neighbors and add them to the queue
			// only adding nodes that haven't been visited
			for (let neighbor of this.getNeighbors(node)) {
				if (!visited[neighbor]) {
					qq.push(neighbor);
					visited[neighbor] = true;
				}
			}
		}
	}
}

module.exports = Graph;
