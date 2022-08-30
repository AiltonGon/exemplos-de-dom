var valorCheque = document.getElementById('cheque')
var botao = document.getElementById('botao')
var resultado = document.getElementById('resultado')

function calcular(){
    let cheque = (valorCheque.value)

    let soma = 500 - cheque

    resultado.innerText = (`o valor do cheque e de ${cheque} e o valor atual da sua conta ${soma}`)
}