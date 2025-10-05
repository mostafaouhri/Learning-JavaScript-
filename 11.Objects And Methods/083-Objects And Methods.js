/*
=> Function this Keyword :
--- this

=> Search
--- Strict Mode
*/

console.log("%c===> [this] #83 <===", "color:red");

console.log(this);
console.log(this === window);

myVar2 = 222;
console.log(window.myVar2);
console.log(this.myVar2);

function sayHello() {
    console.log(this);
    return this;
};
sayHello();
console.log(sayHello() === window);

document.getElementById("cl").onclick = function () {
    console.log(this);
};

let user5 = {
    age: 26,
    ageInDays: function () {
        return this.age * 365;
    },
};

console.log(user5.age);
console.log(user5.ageInDays());
