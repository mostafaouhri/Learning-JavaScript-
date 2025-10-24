console.log("%c===> [19.Object Oriented Programming] #155 <===", "color:#95089e;font-weight:bold");

//    |=========> Constructor Function <=========|
// ---- Prototype

class User8 {
    constructor(id, name) {
        this.i = id;
        this.u = name;
    };
    sayHello() {
        return `Hello ${this.u}`;
    };
};


let User8One = new User8(100, "Elzero");
console.log(User8One.u);

console.log(User8.prototype);

let strOne2 = "Osama";
console.log(String.prototype);
