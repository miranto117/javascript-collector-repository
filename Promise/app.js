// Etat de promise: pending, fulfilled, rejected
// Parametre : callback : parametre resolve reject
// Then 

const maPromesse = new Promise((reject, resolve) => {
    setTimeout(() => {
        resolve("toto")
    }, 1000)
})

maPromesse.then

