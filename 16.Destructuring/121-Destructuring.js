console.log("%c===> [Destructuring-mixed content] #121 <===", "color:red");
/*
===> Destructuring mixed content
*/

const user3 = {
    fName: "mostafa",
    age: 26,
    skills: ["HTML", "CSS", "JavaScript"],
    addresses: {
        morocco: "Meknes",
        Usa: "Florida",
    }
};

const {
    fName: n3,
    age: a3,
    skills: [one, , three],
    addresses: { morocco: m }
} = user3

console.log("your Name is", n3);
console.log("your Age is", a3);
console.log("your skills are : ", one,three);
console.log("your address is", m);