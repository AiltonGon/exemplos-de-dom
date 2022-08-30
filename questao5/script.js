var anoAtual = document.getElementById('dataAtual')
var anoNacimento = document.getElementById('dataNas')

var botao = document.getElementById('botao')
var resu = document.getElementById('resultado')

function calcular(){
    let dataAtual = (anoAtual.value)
    let dataNas = (anoNacimento.value)

    let idade = dataAtual - dataNas
    
    resultado.innerText = (`a sua idade atual e de: ${idade} anos`)
}