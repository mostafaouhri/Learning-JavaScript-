console.log("%c===> [19.Object Oriented Programming] #153 <===", "color:#95089e;font-weight:bold");

//    |=========> Constructor Function <=========|
// ---- Class Inheritance

// Parent Class
class User6 {
    constructor(id, User6Name) {
        this.i = id;
        this.u = User6Name;
    };
    sayHello() {
        return `Hello ${this.u}`;
    };
};

// Derived Class
class Admin extends User6 {
    constructor(id, userName, permissions) {
        super(id, userName);
        this.p = permissions;
    };
};

class SuperMan extends Admin {
    constructor(id, user, per, ability) {
        super(id, user, per);
        this.ab = ability;
    };
};

let User6One = new User6(100, "Mostafa",);
let AdminOne = new Admin(110, "Admin", "Add");
let superOne = new SuperMan(200, "SuperMan", "All", "Fly");

console.log(User6One.u);
console.log(User6One.sayHello());

console.log("####");
console.log(AdminOne.i);
console.log(AdminOne.u);
console.log(AdminOne.p);
console.log(AdminOne.sayHello());

console.log("####");
console.log(superOne.i);
console.log(superOne.u);
console.log(superOne.p);
console.log(superOne.ab);
