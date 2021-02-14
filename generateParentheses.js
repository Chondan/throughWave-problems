const getPermutations = (prefix, arr, memo={}) => {

	const key = prefix.join('') + '_' + arr.join('');
	if (key in memo) return null;
	if (arr.length == 1) return [prefix.concat(arr)];

	const ans = [];
	for (let i = 0; i < arr.length; i++) {
		const remain = arr.slice(0, i).concat(arr.slice(i + 1));
		const result = getPermutations(prefix.concat(arr[i]), remain, memo);
		if (result != null) ans.push(...result);
	}
	memo[key] = ans;
	return ans;

}

const checkCloseProperly = str => {

	if (str[0] == ')') return false;

	const stack = [];
	for (char of str) {
		if (char == '(') stack.push('(');
		else stack.pop();
	}
	return stack.length == 0 ? true : false;

}

const generateParentheses = n => {

	const parenthesesArray = ("(".repeat(n) + ")".repeat(n)).split('');
	const allParentheses = [...new Set(getPermutations([], parenthesesArray).map(p => p.join('')))];
	return allParentheses.filter(p => checkCloseProperly(p));

}

console.log(generateParentheses(1));
console.log(generateParentheses(2));
console.log(generateParentheses(3));
console.log(generateParentheses(4));
console.log(generateParentheses(5));
console.log(generateParentheses(6));
