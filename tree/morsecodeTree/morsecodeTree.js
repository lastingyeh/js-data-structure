class MorseCode {
	constructor(letter, dash, dot) {
		this.letter = letter;
		this.dash = dash;
		this.dot = dot;
	}
}

class MorseCodeTree {
	constructor() {
		this.root = new MorseCode(null);

		this.root.dash = new MorseCode('T');
		this.root.dash.dash = new MorseCode('M');
		this.root.dash.dot = new MorseCode('N');

		this.root.dot = new MorseCode('E');
		this.root.dot.dash = new MorseCode('A');
		this.root.dot.dot = new MorseCode('I');
	}

	// decode ['--','.-','-.'] -> MAN
	decode(message) {
		let result = '';
		for (let i = 0; i < message.length; i++) {
			result += this.decodeLetter(this.root, message[i], 0);
		}
		return result;
	}

	decodeLetter(node, str, index) {
		if (!node) {
			return '';
		}
		if (str.length === index) {
			return node.letter;
		}
		if (str.charAt(index) === '-') {
			return this.decodeLetter(node.dash, str, index + 1);
		}
		if (str.charAt(index) === '.') {
			return this.decodeLetter(node.dot, str, index + 1);
		}
	}
}

module.exports = MorseCodeTree
