const getFactor = num => {
	const factors = [];
	let i = 1;
	while (i <= num) {
		if (num % i == 0) factors.push(i);
		i++;
	}
	return factors;
}

const getRealFraction = (a, b) => {
	const factorB = getFactor(b).reverse();
	// need to reduc a/b -> x/y
	// x is numerator, y is denominator
	let x = a, y = b;
	for (let i = 0; i < factorB.length; i++) {
		if (a % factorB[i] == 0 && b % factorB[i] == 0) {
			x /= factorB[i];
			y /= factorB[i];
			if (y == 1) break;
		}
	}
	return [x, y];
}

const getFractionSum = (array1, array2) => {
	const [numerator1, denominator1] = array1;
	const [numerator2, denominator2] = array2;
	const sum = [ (numerator1*denominator2 + numerator2*denominator1), denominator1*denominator2 ];
	return getRealFraction(...sum);
}

console.log(getFractionSum([3, 5], [7, 5]));