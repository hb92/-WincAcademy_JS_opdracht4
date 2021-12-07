const age = 18;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Bram";
const totalAmount = 75;

if (age >= 18) {
	console.log("Kom er in!");
}
else {
	console.log("Eruit!");
    }

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting");
}

if (isFemale) {
    console.log("Hello Gurl");
}
else {
    console.log("No D's allowed");
}

if (driverStatus == "bob") {
    console.log("Rij jij maar, jij bent nuchter!")
}
else {
    console.log("dit gaat niet meer lukken")
}

if (firstName === "Sarah" || firstName === "Bram") {
    console.log("Gratis bier!")
} else {
    console.log("dat is dan 2 euro")
}

if (totalAmount >= 100) {
    console.log("Champagne!");
  } else if (totalAmount > 50) {
    console.log("Nachos!");
  } else if (totalAmount > 25) {
    console.log("Bitterballen!");
  } else {
    console.log("Meer spenderen man!");
  }