console.log("%c===> [19.Object Oriented Programming] #148 <===", "color:#95089e;font-weight:bold");

//    |=========> Constructor Function <=========|

function User(id, userName, salary) {
    this.i = id;
    this.u = userName;
    this.s = salary + 1000;
};
let userOne = new User(100, "hamid", 5000);
let userTwo = new User(101, "Hind", 6000);
let userThree = new User(102, "Mostafa", 7000);

console.log(userOne.i, userOne.u, userOne.s);
console.log(userTwo.i, userTwo.u, userTwo.s);
console.log(userThree.i, userThree.u, userThree.s);

// const userOne = {
//     id: 100,
//     userName: "Mostafa",
//     salary: 8000,
// };
// const userTwo = {
//     id: 101,
//     userName: "Hamid",
//     salary: 6000,
// };
// const userThree = {
//     id: 102,
//     userName: "Hajar",
//     salary: 5000,
// };

