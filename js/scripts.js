function add(number1,number2){
  return number1 + number2;
 }

function subtract(number1, number2){
  return number1 - number2;
}

function multiply(number1, number2){
  return number1 * number2;
}

function divide(number1, number2){
  return number1 / number2;
}

 var number1 = parseInt(prompt("1st number?"));
 var number2 = parseInt(prompt("2nd number?"));
 var result =  divide(number1, number2);
 alert("It is " + result);

