const CalculatorView = (function () {
  const calculatorDisplay = document.querySelector("#calculator-display");

  const {
    getFirstNumber,
    setFirstNumber,
    getSecondNumber,
    setSecondNumber,
    getOperationSign,
    setOperationSign,
  } = CalculatorModel;

  function handleNumber({ value }) {
    if (getOperationSign()) {
      setSecondNumber(value);
      calculatorDisplay.value += getSecondNumber();
    } else {
      setFirstNumber(value);
      calculatorDisplay.value += getFirstNumber();
    }
  }

  function handleOperationSign({ value }) {
    setOperationSign(value);
    calculatorDisplay.value = "";
  }

  function handleClear() {
    setFirstNumber("");
    setSecondNumber("");
    setOperationSign(null);
    calculatorDisplay.value = "";
  }

  function handleCalculate() {
    const { calculate } = CalculatorController;

    const fistNumber = parseInt(getFirstNumber(), 10);
    const secondNumber = parseInt(getSecondNumber(), 10);

    const result = calculate(fistNumber, secondNumber, getOperationSign());

    calculatorDisplay.value = result;
  }

  return { handleNumber, handleOperationSign, handleClear, handleCalculate };
})();
