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
  $("#add").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var result =  add(number1, number2);
  
    $("#output").text(result);
  });

  $("#sub").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#num3").val());
    var number2 = parseInt($("#num4").val());
    var result =  subtract(number1, number2);
  
    $("#output").text(result);
  });

  $("#multiply").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#num5").val());
    var number2 = parseInt($("#num6").val());
    var result =  multiply(number1, number2);
  
    $("#output").text(result);
  });

  $("#divide").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#num7").val());
    var number2 = parseInt($("#num8").val());
    var result =  divide(number1, number2);
  
    $("#output").text(result);
  });
});
 