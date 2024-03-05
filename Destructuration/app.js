// L'affectation par decomposition permet d'extraire des données
// Tableau, Objet
// Forme ressemble à la structure du tableau ou de l'objet

let a, b, rest;
// Affectation sans declaration
[a, b] = [10, 20];

console.log("le variable a en destructuring:", a);
console.log("le variable b en destructuring:", b);

// Affectation du rest
[a, b, ...rest] = [10, 20, 30, 40, 50,];

console.log(rest);

//Affectation par designation
({a, b} = {a: 1, b: 2})
console.log("le variable a en destructuring:", a);
console.log("le variable b en destructuring:", b);


// Avantage de l'assignation
const toto = ["un", "deux", "trois"];
const [item1, item2, item3] = toto;

console.log(item1)
console.log(item2)
console.log(item3)

// Valeur par defaut
const [i = 100, j = 200] = [1];

console.log(i)
console.log(j)

// Renvoyer plusieurs valeurs
function f() {
    return [123, 456]
}

const [k, m] = f()

console.log(k)
console.log(m)

const x = f()
console.log("X vaut" , x)


// Ignorer valeur
const [ , s] = f()
console.log("k vaut" , k)
console.log("s vaut" , s)

