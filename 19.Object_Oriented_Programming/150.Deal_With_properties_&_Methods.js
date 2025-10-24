console.log("%c===> [19.Object Oriented Programming] #150 <===", "color:#95089e;font-weight:bold");

//    |=========> Constructor Function <=========|
// ---- Deal With properties & Methods

class User3 {
    constructor(id, User3Name, salary) {
        // Properties :
        this.i = id;
        this.u = User3Name || "Unknown";
        this.s = salary < 6000 ? salary + 500 : salary;
        this.msg = function () {
            return `Hellow ${this.u} Your Salary Is ${this.s}`;
        }
    };
    // Methods :
    writeMsg() {
        return `Hellow ${this.u} Your Salary Is ${this.s}`;
    };

};
let User3One = new User3(100, "hamid", 5000);
let User3Two = new User3(101, "", 6000);
let User3Three = new User3(102, "Mostafa", 7000);

console.log(User3One.u, User3One.s);
console.log(User3Two.u, User3Two.s);

console.log(User3One.msg());
console.log(User3Two.msg);// Native Code

console.log(User3One.writeMsg());
console.log(User3Two.writeMsg);// Native Code