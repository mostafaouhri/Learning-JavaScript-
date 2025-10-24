console.log("%c===> [19.Object Oriented Programming] #149 <===", "color:#95089e;font-weight:bold");

//    |=========> Constructor Function <=========|

class User2 {
    constructor(id, User2Name, salary) {
        this.i = id;
        this.u = User2Name;
        this.s = salary;
    }
};
let User2One = new User2(100, "hamid", 5000);
let User2Two = new User2(101, "Hind", 6000);
let User2Three = new User2(102, "Mostafa", 7000);

console.log(User2One.i, User2One.u, User2One.s);

console.log(User2One instanceof User2);
console.log(User2One.constructor === User2);
