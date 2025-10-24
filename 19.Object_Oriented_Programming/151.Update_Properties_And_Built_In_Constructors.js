console.log("%c===> [19.Object Oriented Programming] #151 <===", "color:#95089e;font-weight:bold");

//    |=========> Constructor Function <=========|
// ---- Update Properties
// ---- Built In Constructors

class User4 {
    constructor(id, User4Name, salary) {
        this.i = id;
        this.u = User4Name;
        this.s = salary;
    };
    updateName(newName) {
        this.u = newName;
    };
};

let user4One = new User4(100, "Mostafa", 5000);

console.log(user4One.u);
user4One.updateName("Ouhri");
console.log(user4One.u);

let strOne = "Ouhri";
let strTwo = new String("Ouhri");
console.log(typeof strOne);
console.log(typeof strTwo);

console.log(strOne instanceof String);
console.log(strTwo instanceof String);

console.log(strOne.constructor === String);
console.log(strTwo.constructor === String);
