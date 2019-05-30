const { TreeNode, Tree } = require('./tree');

const root = new TreeNode(50);
const r1 = new TreeNode(34);
const r2 = new TreeNode(58);
const r3 = new TreeNode(90);
const r4 = new TreeNode(62);
const r5 = new TreeNode(12);
const r6 = new TreeNode(24);

const tree = new Tree();
tree.root = root;
tree.root.left = r1;
tree.root.right = r2;
r1.left = r3;
r1.right = r4;
r2.left = r5;
r5.right = r6;

console.log('visit tree to array', tree.collect());
console.log('sum tree', tree.sum());
console.log('contains 12 must true => ', tree.contains(12));
console.log('contains 35 must false => ', tree.contains(35));
