// Fonction passée dans une autre fonction en tant qu'argument
// qui est en suite invoquée à l'interieur de la fonction externe
//Synchrone

function salutation(name)
{
    console.log("Hello" + name);
}

function processUserInput(callback)
{
    let name =  "mon callaback";
    callback(name);
}

processUserInput(salutation);

//Asynchrone
