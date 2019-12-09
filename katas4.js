const gotCitiesCSV =
  "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = [
  "Mordor",
  "Gondor",
  "Rohan",
  "Beleriand",
  "Mirkwood",
  "Dead Marshes",
  "Rhun",
  "Harad"
];
const bestThing =
  "The best thing about a boolean is even if you are wrong you are only off by a bit";

function displayString(num, result) {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = "<h2>kata" + num + "</h2> <br>" + result;
  document.body.appendChild(newDiv);
}
function Katas1() {
  const gotCitiesArray = gotCitiesCSV.split(",");
  displayString(1, gotCitiesArray);
}
Katas1();

function Katas2() {
  const bestThing2 = bestThing.split();
  displayString(2, bestThing2);
}
Katas2();

function Katas3() {
  const gotCitiesArray = gotCitiesCSV.split(",");
  const gotCitiesString = gotCitiesArray.join(";");

  displayString(3, gotCitiesString);
}
Katas3();

function Katas4() {
  const lotrCitiesCSV = lotrCitiesArray.join(",");
  displayString(4, lotrCitiesCSV);
}
Katas4();

function Katas5() {
  let arr = [];
  for (let index in lotrCitiesArray) {
    if (index < 5) {
      arr.push(lotrCitiesArray[index]);
    }
  }
  return arr;
}
displayString(5, Katas5());
Katas5();

function Katas6() {
  let arr = [];
  for (let index in lotrCitiesArray) {
    if (index > 2) {
      arr.push(lotrCitiesArray[index]);
    }
  }
  return arr;
}
displayString(6, Katas6());
Katas6();

function Katas7() {
  let result = "";
  for (i = 2; i <= 4; i++) {
    result += lotrCitiesArray[i] + ",";
  }
  return result;
}
displayString(7, Katas7());

function Katas8() {
  let lotrCities1 = lotrCitiesArray.splice(5, 2);
  return lotrCitiesArray;
}
displayString(8, Katas8());

function Katas9() {
  displayCities9 = lotrCitiesArray.splice(5, 2);
  return lotrCitiesArray;
}
displayString(9, Katas9());

function Katas10() {
  let displayCities10 = lotrCitiesArray.splice(2, 0, "Rohan");
  return lotrCitiesArray;
}
displayString(10, Katas10());

function Katas11() {
  let displayCities11 = lotrCitiesArray.splice(5, 1, "Deadest Marshes");
  return lotrCitiesArray;
}
displayString(11, Katas11());

function Katas12() {
  let veryBestThing = bestThing.slice(0, 14);
  return veryBestThing;
}
displayString(12, Katas12());

function Katas13() {
  let veryBestThing = bestThing.slice(-12);
  return veryBestThing;
}
displayString(13, Katas13());

function Katas14() {
  let veryBestThing = bestThing.slice(23, 38);
  return veryBestThing;
}
displayString(14, Katas14());

function Katas15() {
  let veryBestThing = bestThing.substring(69);
  return veryBestThing;
}
displayString(15, Katas15());

function Katas16() {
  let veryBestThing = bestThing.substring(23, 38);
  return veryBestThing;
}
displayString(16, Katas16());

function Katas17() {
  lotrCitiesArray.pop();
  return lotrCitiesArray;
}
displayString(17, Katas17());

function Katas18() {
  lotrCitiesArray.push("Deadest Marshes");
  return lotrCitiesArray;
}
displayString(18, Katas18());

function Katas19() {
  lotrCitiesArray.shift();
  return lotrCitiesArray;
}
displayString(19, Katas19());

function Katas20() {
  lotrCitiesArray.unshift("Mordor");
  return lotrCitiesArray;
}
displayString(20, Katas20());
