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
function loadScript(src, callback)
{
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);

    script.onload = () => callback(script);
    document.head.append(script);
}

loadScript('script.js', script => {
    console.log(`The script ${script.src} is loaded`)
});


