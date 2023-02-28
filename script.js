let display = document.getElementById('display');
let operand1 = null;
let operator = null;
let operand2 = null;

function clearDisplay() {
  display.innerText = '';
  operand1 = null;
  operator = null;
  operand2 = null;
}

function deleteDigit() {
  let currentValue = display.innerText;
  display.innerText = currentValue.slice(0, -1);
}

function addDigit(digit) {
  display.innerText += digit;
}

function addDecimal() {
  if (!display.innerText.includes('.')) {
    display.innerText += '.';
  }
}

function addOperator(op) {
  if (operator !== null) {
    calculate();
  }
  operand1 = parseFloat(display.innerText);
  operator = op;
  display.innerText = '';
}

function calculate() {
  operand2 = parseFloat(display.innerText);
  let result;
  switch(operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
    default:
      return;
  }
  display.innerText = result.toString();
  operand1 = result;
  operator = null;
}