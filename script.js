// On utilise la fonction prompt() pour choisir son prénom qui sera remplacer de firstName
let userName = window.prompt("Quel est votre prénom")

function sayHello(firstName, hour){
// On déclare la variable message 
    let message = "Bonjour"
// Si hour est supérieur ou égale à 18
    if (hour >= 18) {
        message = `Bonsoir ${firstName} !` // Bonsoir
    }
// Sinon
    else { 
        message = `Bonjour ${firstName} !` // Bonjour
    }

    document.querySelector('h1').innerText = message
}
// On récupere l'heure actuelle
let currentHour = new Date().getHours()

// Appel de la fonction sayHello(firsName, hour)
sayHello(userName, currentHour)