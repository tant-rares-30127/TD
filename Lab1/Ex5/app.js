document.getElementById("sum").addEventListener("click", sum);
document.getElementById("dif").addEventListener("click", dif);
document.getElementById("div").addEventListener("click", div);
document.getElementById("multi").addEventListener("click", multi);

function sum() {
  var x = parseInt($("#firstNumber").val());
  var y = parseInt($("#secondNumber").val());
  var value = x + y;
  document.getElementById("equal").addEventListener("click", function () {
    equal(value);
  });
}

function dif() {
  var x = parseInt($("#firstNumber").val());
  var y = parseInt($("#secondNumber").val());
  var value = x - y;
  document.getElementById("equal").addEventListener("click", function () {
    equal(value);
  });
}

function div() {
  var x = parseInt($("#firstNumber").val());
  var y = parseInt($("#secondNumber").val());
  var value = x / y;
  document.getElementById("equal").addEventListener("click", function () {
    equal(value);
  });
}

function multi() {
  var x = parseInt($("#firstNumber").val());
  var y = parseInt($("#secondNumber").val());
  var value = x * y;
  document.getElementById("equal").addEventListener("click", function () {
    equal(value);
  });
}

function equal(value) {
  document.getElementById("output").innerHTML = value;
  document.getElementById("equal").removeEventListener("click", function () {});
}
