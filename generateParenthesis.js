const gen = (str, open, close, n) => {

	if (close == n) return [str];

	const ans = [];
	if (open < n) {
		const result = gen(str + "(", open+1, close, n);
		ans.push(...result);
	}
	if (open > close) {
		const result = gen(str + ")", open, close+1, n);
		ans.push(...result);
	}
	return ans;

}

const generateParentheses = n => {
	return gen("", 0, 0, n);
}

console.log(generateParentheses(1));
console.log(generateParentheses(2));
console.log(generateParentheses(3));
console.log(generateParentheses(4));
console.log(generateParentheses(5));
console.log(generateParentheses(6));
