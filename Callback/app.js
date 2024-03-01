// Fonction passée dans une autre fonction en tant qu'argument
// qui est en suite invoquée à l'interieur de la fonction externe
//Synchrone

function salutation(name)
{
    console.log("Hello " + name);
}

function processUserInput(callback)
{
    let name =  "mon callback";
    callback(name);
}

processUserInput(salutation);

//Asynchrone
function loadScript(src, callback)
{
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(script);
    document.head.append(script);
}

// Appeller la function avec la callback
loadScript('script.js', script => {
    console.log(`The script ${script.src} is loaded`)
    //Callback imbriqués
    loadScript('script1.js', script => {
        console.log(`The script1 ${script.src} is loaded`)

        loadScript('script.js', script => {
            console.log(`The script2 ${script.src} is loaded`)
     
        });

    });

});

const array = [4, 1, -2, 3, 7, -1]

function removeNegative(theArray, callback)
{
    setTimeout(() => 
    { 
        const tab = []
        for (const value of theArray)
        {
            if (callback(value))
            {
                tab.push(value)
            }
        }
        console.log(tab)
        return tab
    }, 2000)
}

removeNegative(array, (x) => x >= 0 )






