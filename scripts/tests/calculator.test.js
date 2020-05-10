const CalculatorTest = (function () {
  const {
    getFirstNumber,
    setFirstNumber,
    getSecondNumber,
    setSecondNumber,
  } = CalculatorModel;

  const { calculate } = CalculatorController;

  function run() {
    setFirstNumber(10);
    setSecondNumber(10);

    calculate(getFirstNumber(), getSecondNumber(), "+") === 20
      ? console.info("Soma sucesso")
      : console.error("Soma falhou");

    calculate(getFirstNumber(), getSecondNumber(), "-") === 0
      ? console.info("Subtrair sucesso")
      : console.error("Subtrair falhou");

    calculate(getFirstNumber(), getSecondNumber(), "*") === 100
      ? console.info("Multiplicar sucesso")
      : console.error("Multiplicar falhou");

    calculate(getFirstNumber(), getSecondNumber(), "/") === 1
      ? console.info("Dividir sucesso")
      : console.error("Dividir falhou");
  }

  return {
    run,
  };
})();
