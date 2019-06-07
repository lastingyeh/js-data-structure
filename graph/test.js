const Graph = require('./graph');

const gg = new Graph()
gg.addNode("Washington")
gg.addNode("Oregon")
gg.addNode("Idaho")
gg.addNode("Nevada")
gg.addNode("California")

gg.addBidirectionalEdge("Washington", "Oregon")
gg.addBidirectionalEdge("Washington", "Idaho")
gg.addBidirectionalEdge("Oregon", "Idaho")
gg.addBidirectionalEdge("Oregon", "California")
gg.addBidirectionalEdge("Oregon", "Nevada")
gg.addBidirectionalEdge("Idaho", "Nevada")
gg.addBidirectionalEdge("California", "Nevada")

console.log("WA", gg.getNeighbors("Washington"))
console.log("OR", gg.getNeighbors("Oregon"))
console.log("ID", gg.getNeighbors("Idaho"))
console.log("CA", gg.getNeighbors("California"))
console.log("NV", gg.getNeighbors("Nevada"))

console.log('*Breadth-first:');
gg.breadthFirstTraversal('Washington');

console.log('------------------------');

console.log('*Depth-first:');
gg.depthFirstTraversal('Washington');
