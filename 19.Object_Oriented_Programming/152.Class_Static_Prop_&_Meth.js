console.log("%c===> [19.Object Oriented Programming] #152 <===", "color:#95089e;font-weight:bold");

//    |=========> Constructor Function <=========|
// ---- Static Properties & Methods

class User5 {
    count = 5;
    static count2 = 10; // static property
    constructor(id, User5Name, salary) {
        this.i = id;
        this.u = User5Name;
        this.s = salary;
        User5.count2++;
    };
    // static method 
    static sayHello() {
        return `Hello From Class`;
    };
    static countMembers() {
        return `${this.count2} Members Created`;
    };
};

let user5One = new User5(100, "Mostafa", 5000);
let user5Two = new User5(101, "Osama", 5000);
let user5Three = new User5(102, "Hind", 6000);

console.log(user5One.u);
console.log(user5Two.u);
console.log(user5One.count);
console.log(User5.count);
console.log(user5One.count2);
console.log(User5.count2);
// console.log(user5One.sayHello());

console.log(User5.countMembers());