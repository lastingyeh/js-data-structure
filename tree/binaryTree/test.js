const BinaryTree = require('./binaryTree');

const bt = new BinaryTree();
bt.add(52);
bt.add(45);
bt.add(42);
bt.add(49);
bt.add(65);
bt.add(54);
bt.add(55);
bt.add(70);
bt.add(90);
bt.add(89);

console.log('bt collect: ', bt.collect());
console.log('contans 89: ', bt.contains(89));

// test 100000
const mt = new BinaryTree();

function getRandom(num) {
	return Math.round(Math.random() * 100 + 1);
}

for (let i = 0; i < 100000; i++) {
	mt.add(getRandom());
}

const last = getRandom();
mt.add(last);
console.log('contains %d: %s', last, mt.contains(last));
