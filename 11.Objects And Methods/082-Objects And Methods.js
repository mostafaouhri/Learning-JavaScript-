/*
=> Object :
--- create with new keyword new object();
*/

console.log("%c===> [new object()] #82 <===", "color:red");

let user4 = new Object({
    age: 20,
});
console.log(user4);

user4.age = 26;
user4["country"] = "morocco";
user4.sayHello = function () {
    return `Hello`;
};
console.log(user4);
console.log(user4['country']);
console.log(user4.sayHello());