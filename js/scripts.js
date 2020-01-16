// Business/back-end logic:
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

// User interface/front-end logic:
$(document).ready(function(){
  $("#calculator").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;

    if (operator === "add"){
      result =  add(number1, number2);
    } 
    else if (operator === "subtract"){
      result = subtract(number1, number2);
    }
    else if (operator === "multiply"){
      result = multiply(number1, number2);
    }
    else if (operator === "divide"){
      result = divide(number1, number2);
    }
    
  
    $("#output").text(result);
  });
});
 