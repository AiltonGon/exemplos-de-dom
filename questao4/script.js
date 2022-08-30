var temperatura = document.getElementById('F')
var botao = document.getElementById('botao')
var resultado = document.getElementById('resultado')


function calcular(){
let F = Number(temperatura.value)
let C = F + (5 * (F-32) / 9)

resultado.innerText = (`a temperatura em c e de ${C}`)
}