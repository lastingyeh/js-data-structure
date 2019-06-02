const MorseCodeTree = require('./morsecodeTree');

const mct = new MorseCodeTree();

console.log(mct.decode(['--', '.-', '-.']));
