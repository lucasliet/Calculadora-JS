
const CalculatorTest = (function() {
  function run() {
    calcular(2, 2, "+") === 4 && calcular(5, 9, "+") === 14
      ? console.info("Soma sucesso")
      : console.error("Soma falhou");
  
    calcular(4, 2, "-") === 2 && calcular(10, 9, "-") === 1
      ? console.info("Subtrair sucesso")
      : console.error("Subtrair falhou");
  
    calcular(3, 2, "*") === 6 && calcular(10, 10, "*") === 100
      ? console.info("Multiplicar sucesso")
      : console.error("Multiplicar falhou");
  
    calcular(9, 3, "/") === 3 && calcular(10, 2, "/") === 5
      ? console.info("Dividir sucesso")
      : console.error("Dividir falhou");
  }

  return {
    run
  }
})()
