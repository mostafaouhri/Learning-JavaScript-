console.log("%c===> [Destructuring-function parameters] #120 <===", "color:red");
/*
===> Destructuring function parameters 
*/

const user2 = {
    fName: "mostafa",
    age: 26,
    theTitle: "Devloper",
    country: "Morocco",
    color: "black",
    skills: {
        html: 70,
        css: 80,
    },
};

showDetails(user2);

function showDetails(obj) {
    console.log(`Your Name Is ${obj.fName}`);
    console.log(`Your Age Is ${obj.age}`);
    console.log(`Your css skill Is ${obj.skills.css}`);
};
console.log(`________________________`);

showDetails(user2);

function showDetails({ fName: nnn, age: aaa, skills: { css: c } } = user2) {
    console.log(`Your Name Is ${nnn}`);
    console.log(`Your Age Is ${aaa}`);
    console.log(`Your css skill Is ${c}`);
};