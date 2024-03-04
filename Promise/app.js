// Etat de promise: pending, fulfilled, rejected
// Parametre : callback : parametre resolve reject
// Then 

const maPromesse = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random()
        if (randomNumber < 0.5) {
            resolve("Succès : " + randomNumber);
        } else {
            reject("Échec : " + randomNumber);
        }
    }, 1000)
})

maPromesse
.then((resultat) =>{
    console.log('Promesse tenue avec succès :', resultat);
})
.catch((erreur) => {
    console.log('La promesse a échoué :', erreur);
})

