console.log("%c===> [19.Object Oriented Programming] #154 <===", "color:#95089e;font-weight:bold");

//    |=========> Constructor Function <=========|
// ---- Encapsulation

class User7 {
    // Private Property:
    #e;
    constructor(id, User7Name, eSalary) {
        this.i = id;
        this.u = User7Name;
        this.#e = eSalary;
    };
    getSalary() {
        return parseInt(this.#e);
    };
};
class User7SuperCl extends User7 {
    constructor(one, two, three) {
        super(one, two, three);
    }
};


let User7One = new User7(100, "Mostafa", "5000 MAD");
let User7Super = new User7SuperCl(200, "Super-Man", "900Man");

console.log(User7One.u);
// console.log(User7One.e * 0.1);
// console.log(User7One.#e); // Not accessible outside class
console.log(User7One.getSalary() * 0.1 + " USD");
console.log("-------");

console.log(User7Super.i);
console.log(User7Super.u);
console.log(User7Super.getSalary());

