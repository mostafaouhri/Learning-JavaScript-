console.log("%c===> [Map And Set] #131 <===", "color:darkorange");

/*
   |=========> Array Methods <=========|
   - Array.every
*/

const locations = {
    20: "Place 1",
    30: "Place 2",
    15: "Place 3",
    40: "Place 4",
};

let mainLocation = 15;

let myLocationsArray = Object.keys(locations);
console.log(myLocationsArray);

let myLocationsArray2 = myLocationsArray.map((n) => +n);
console.log(myLocationsArray2);

let check2 = myLocationsArray2.every(function (ele) {
    return ele > this;
}, mainLocation);
console.log(check2);

