
//VARIAVEIS GLOBAIS
var input = document.getElementById('resultado');
input.value = "";
var result = null;
var signal = null;
var verificador = false;

// TESTES
function calcTests() {
    calcular(2, 2, '+') === 4 && calcular(5, 9, '+') === 14 ?
        console.info("Soma sucesso") :
        console.error("Soma falhou")

    calcular(4, 2, '-') === 2 && calcular(10, 9, '-') === 1 ?
        console.info("Subtrair sucesso") :
        console.error("Subtrair falhou")

    calcular(3, 2, '*') === 6 && calcular(10, 10, '*') === 100 ?
        console.info("Multiplicar sucesso") :
        console.error("Multiplicar falhou")

    calcular(9, 3, '/') === 3 && calcular(10, 2, '/') === 5 ?
        console.info("Dividir sucesso") :
        console.error("Dividir falhou")
}
calcTests();

//BOTÃO DE RESET
function btnCE() {
    signal = null
    result = null
    input.value = ""
}

//TECLADO NUMERICO DA CALCULADORA
function btnNumbers(element) {
    if (verificador) {
        input.value = element.value
        verificador = false
    } else {
        var pastInput = input.value
        input.value = `${pastInput}${element.value}`
    }
}

//BOTÕES DE OPERAÇÃO DA CALCULADORA
function btnCalc(operator) {
    signal = operator
    if (result != null) {
        result = calcular(result, input.value, signal)
        input.value = result
    } else {
        result = parseInt(input.value, 10)
    }
    verificador = true
}

function btnIgual() {
    input.value = calcular(result, input.value, signal)
    verificador = true
    result = null
}

//FUNÇÃO DE CALCULO
function calcular(calc, input, operator) {
    switch (operator) {
        case '+': calc += parseInt(input, 10);
            break;
        case '-': calc -= parseInt(input, 10);
            break;
        case '*': calc *= parseInt(input, 10);
            break;
        case '/': calc /= parseInt(input, 10);
            break;
        default: btnCE();
    }
    return calc;
}