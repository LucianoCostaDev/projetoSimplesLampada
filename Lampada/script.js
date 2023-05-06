const lamp = window.document.getElementById('lamp')
const btnOn = window.document.getElementById('btnOn')
const btnOff = window.document.getElementById('btnOff')
const nameInt = window.document.getElementById('nameinter')

let numVeri = 0

function clicarOn(){
    lamp.src = 'assets/ligada.jpg'
    nameInt.innerHTML = 'Você ligou a Lâmpada'
}

console.log(numVeri)

function clicarOff(){
    lamp.src = 'assets/desligada.jpg'
    nameInt.innerHTML = 'Você desligou a Lâmpada'
}

function mouseover() {
    lamp.src = 'assets/quebrada.jpg'
    nameInt.innerHTML = 'Você quebrou a Lâmpada'
}

btnOn.addEventListener('click', clicarOn)
btnOff.addEventListener('click', clicarOff)
lamp.addEventListener('mouseover', mouseover)