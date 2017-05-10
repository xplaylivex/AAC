var a = 1,
	b = 10,
	c = 55;

function test_condition(value) {
	if (value == 10) {
		console.log('petite valeur');
	} else if (value == 20) {
		console.log('moyenne valeur');
	} else {
		console.log('grande valeur');
	}

	console.log(value % 2 ? 'nombre pair' : 'nombre impair');
}

test_condition(a);
test_condition(b);
test_condition(c);

// => petite valeur, nombre impair, moyenne valeur, nombre pair, grande valeur, nombre impair