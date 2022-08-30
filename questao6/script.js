var base = document.getElementById('b')
var altura = document.getElementById('a')

function calcular(){
    let b = (base.value)
    let a = (altura.value)

    let soma = (b * a) / 2

    resultado.innerText = ("a soma do a area do triangulo e de: ", soma)
}