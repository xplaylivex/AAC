var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphabet_tableau = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabet_obj = { first_value: "a", second_value: "b" }

// Afficher l'alphabet :
/***********************/
// Identique pour le tableau
var i = 0;
while (i < alphabet.length) {
	console.log(alphabet[i]);
	++i;
}

/***********************/
// Identique pour le tableau
var i = 0;
do {
	console.log(alphabet[i]);
	++i;
} while (i < alphabet.length)

/***********************/
// Identique pour le tableau
for (var i = 0 ; i < alphabet.length ; ++i) {
	console.log(alphabet[i]);
}

/***********************/
// Identique pour le tableau
for (var index in alphabet) {
	console.log(alphabet[index]);
}

// Exercices
// 1) Inverser un tableau (qui représente l'alphabet par exemple)
// 2) Créer la fonction mathématique "puissance" => 2^3
// 3) Afficher une liste de course représentée par un objet de la forme :
// {
// 	nom_de_l_article: nombre_d_article,
// }
// et afficher le pluriel quand il faut