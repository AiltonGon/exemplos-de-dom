var totalVendas = document.getElementById("venda")
var botao = document.getElementById("botao")
var resultado = document.getElementById("resultado")

function calcular(){
    let venda = (totalVendas.value)

    let soma = venda * 50
    let soma1 = soma + 500

    resultado.value = soma1
}