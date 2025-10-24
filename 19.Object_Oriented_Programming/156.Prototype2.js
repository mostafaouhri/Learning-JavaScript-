console.log("%c===> [19.Object Oriented Programming] #156 <===", "color:#95089e;font-weight:bold");

//    |=========> Constructor Function <=========|
// ---- add to Prototype chain
// ---- Extend build in constructors Features

class User9 {
    constructor(id, userName) {
        this.i = id;
        this.u = userName;
    };
    sayHello() {
        return `Hello ${this.u}`;
    };
};


let User9One = new User9(100, "Elzero");
console.log(User9One.u);
console.log(User9.prototype);
console.log(User9One);

User9.prototype.sayWelcome = function () {
    return `Welcome ${this.u}`;
};

Object.prototype.love = "Elzero Web School";

String.prototype.addDotBeforeAfter = function (val) {
    return `.${this}.`;
};

let Txt = "OUHRI";

console.log(Txt.addDotBeforeAfter());