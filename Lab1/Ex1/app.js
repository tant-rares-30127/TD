console.log(" Welcome to data transmission ");
document.getElementById(" message ").innerHTML = " Message from JavaScript ";
var user = {
  id: 1,
  name: "Alexandru Cristea",
  username: "acristea",
  email: "acrsitea@test.com",
  address: {
    street: "Padin",
    number: "Ap. 10",
    city: "Cluj-Napoca",
    zipcode: "123456",
    geo: {
      lat: "46.783364",
      long: "23.546472",
    },
  },
  phone: "004-07xx-123456",
  company: {
    name: "XYZ",
    domain: "Air Traffic Management",
    cities: ["Cluj-Napoca", "Vienna", "Paris"],
  },
};
console.log(user.name);
console.log(user.address.geo.lat);
console.log(user.company.name);
console.dir(user.company.cities);
console.log(user.company.cities[0]);

function print(message) {
  console.log(message);
}
print(" hello ");

var password = " 123456 ";
console.log(password == "123456" ? "ALLOW" : "DENY");

var counter = 0;
function printValue(divId, value) {
  document.getElementById(divId).innerHTML = value;
}
printValue("counter", 0);

document.getElementById("inc").addEventListener("click", increment);

function increment() {
  counter++;
  printValue("counter", counter);
}

var counter = 0;

function printValue(divId, value) {
  $("#" + divId).html(value);
}
printValue("counter", 0);
