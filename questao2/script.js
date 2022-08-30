var primeiroNUM = document.getElementById('numero1')
var segundoNUM = document.getElementById('numero2')
var botao = document.getElementById('botao')
var resultado = document.getElementById('resultado')

function calcular(){
    let numero1 = Number(primeiroNUM.value)
    let numero2 = Number(segundoNUM.value)

    let calculo = numero1 + numero2

    resultado.innerText = (`Resultado ${calculo}`)
}

