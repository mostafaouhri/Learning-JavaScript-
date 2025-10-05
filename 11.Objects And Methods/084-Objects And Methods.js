/*
=> Object :
--- create object with create method
*/

console.log("%c===> [create method] #84 <===", "color:red");

let user6 = {
    age: 20,
    doubleAge: function () {
        // return user6.age * 2;
        return this.age * 2;
    },
};

console.log(user6);
console.log(user6.age);
console.log(user6.doubleAge());

let obj = Object.create({});
obj.a = 100;
console.log(obj);

let copyObj = Object.create(user6);
copyObj.age = 50;
console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());