const CalculatorController = (function () {
  function calculate(firstNumber, secondNumber, operationSign) {
    switch (operationSign) {
      case "+":
        return firstNumber + secondNumber;

      case "-":
        return firstNumber - secondNumber;

      case "*":
        return firstNumber * secondNumber;

      default:
        return firstNumber / secondNumber;
    }
  }

  return { calculate };
})();
