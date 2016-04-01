var min = 1;
var limit = 1000;
var multipulesOf = [3, 5];
var multipules = [];
var sum = undefined;
for(var i = min; i < limit; i++) {
	multipulesOf.forEach(m => {
		if(i % m === 0 && !multipules.includes(i)) {
			multipules.push(i);
		}
	});
}

sum = multipules.reduce((result, item) => result + item, 0);
