const body = document.body

const divje = document.createElement("div")

divje.innerText = 'hoi'

body.append(divje)

function verwijder() {
    divje.remove()
}

// Opdracht 1: voeg een functie toe die heet voegToe()
// als op de knop gedrukt wordt, dan is de div weer zichtbaar

// Opdracht 2: voeg twee knoppen en twee functies toe 
// de knoppen moeten de kleur van paragraaf 1 veranderen
// tip: gebruik document.querySelector()