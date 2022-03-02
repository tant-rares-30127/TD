var counter = 0;
function printValue(divId, value) {
  document.getElementById(divId).innerHTML = value;
}
printValue("counter", counter);

document.getElementById("dec").addEventListener("click", decrement);
document.getElementById("inc").addEventListener("click", increment);

function decrement() {
  if (counter > 0) {
    counter--;
    printValue("counter", counter);
  }
}

function increment() {
  if (counter < 10) {
    counter++;
    printValue("counter", counter);
  }
}

var counter = 0;

function printValue(divId, value) {
  $("#" + divId).html(value);
}
printValue("counter", 0);
