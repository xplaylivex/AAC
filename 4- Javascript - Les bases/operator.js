var b = null;

typeof a;// => "undefined"
typeof b;// => "object"

typeof a === "undefined";// => true
typeof b === "undefined";// => false


									typeof a === "undefined"; // true
/*
est mieux car sur certaines navigateurs il est possible
de faire :*/ 						undefined = 42;
/*
Or si a est réellement undefined, alors le typeof ne ment pas
alors que si on faisait :*/ 		a === undefined;	// false
/*
c'est comme si l'on faisait :*/ 	a === 42;			// false