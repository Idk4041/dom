const body = document.body

const divje = document.createElement("div")

divje.innerText = 'hoi'

body.append(divje)

function verwijder() {
    divje.remove()
}

function voegToe() {
    body.append(divje)
}
function rood() {
    document.querySelector("p").style.color = "red"
}
function blauw() {
    document.querySelector("p").style.color = "blue"
}
function wit() {
    document.querySelector("p").style.color = "white"
}
// Opdracht 1: voeg een functie toe die heet voegToe()
// als op de knop gedrukt wordt, dan is de div weer zichtbaar

// Opdracht 2: voeg twee knoppen en twee functies toe 
// de knoppen moeten de kleur van paragraaf 1 veranderen
// tip: gebruik document.querySelector()