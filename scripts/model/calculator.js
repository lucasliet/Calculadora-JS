const CalculatorModel = (function () {
  let firstNumber = "";
  let secondNumber = "";
  let operationSign = null;

  function getFirstNumber() {
    return firstNumber;
  }

  function setFirstNumber(value) {
    firstNumber = value;
  }

  function getSecondNumber() {
    return secondNumber;
  }

  function setSecondNumber(value) {
    secondNumber = value;
  }

  function getOperationSign() {
    return operationSign;
  }

  function setOperationSign(value) {
    operationSign = value;
  }

  return {
    getFirstNumber,
    setFirstNumber,
    getSecondNumber,
    setSecondNumber,
    getOperationSign,
    setOperationSign,
  };
})();
