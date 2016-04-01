let min = 1;
let limit = 1000;
let multipulesOf = [3, 5];
let multipules = [];
let sum = undefined;
for(let i = min; i < limit; i++) {
	multipulesOf.forEach(m => {
		if(i % m === 0 && !multipules.includes(i)) {
			multipules.push(i);
		}
	});
}

sum = multipules.reduce((result, item) => result + item, 0);
