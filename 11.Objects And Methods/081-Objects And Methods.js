/*
=> Object :
--- Nested object and trainings
*/

console.log("%c========>  Nested object #81  <========", "color:red");

let user3 = {
    theName: "Mostafa",
    age: 26,
    skills: ["HTML", "CSS", "JS"],
    available: false,
    addresses: {
        Usa: "Washinton DC",
        Morocco: {
            one: "Midelt",
            two: "Meknes",
        }
    },
    checkAv: function () {
        if (user3.available === true) {
            return `Free For Work`;
        }
        else
            return `Not Free`;
    },
}

console.log(user3.theName);
console.log(user3.age);
console.log(user3.skills);
console.log(user3.skills.join(" | "));
console.log(user3.skills[2]);
console.log(user3.addresses.Usa);
console.log(user3.addresses.Morocco);
console.log(user3.addresses.Morocco.one);
console.log(user3["addresses"].Morocco.one);
console.log(user3["addresses"]["Morocco"].one);
console.log(user3.checkAv());


