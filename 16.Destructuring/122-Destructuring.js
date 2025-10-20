console.log("%c===> [Destructuring-Challenge] #122 <===", "color:red");
/*
===> Destructuring : Challenge
*/


let chosen = 3;

let myfriendsChallenge = [
    { title: "Mostafa", age: 26, available: true, skills: ["HTML", "CSS"] },
    { title: "Mehdi", age: 33, available: false, skills: ["Python", "Django"] },
    { title: "Nada", age: 24, available: true, skills: ["PHP", "Laravel"] },
];

let [{ title: title1, age: age1, available: available1, skills: [, lastSkill1] },
    { title: title2, age: age2, available: available2, skills: [, lastSkill2] },
    { title: title3, age: age3, available: available3, skills: [, lastSkill3] },
] = myfriendsChallenge;

// console.log(title);

if (chosen == 1) {
    console.log("your Name is :", title1);
    console.log("your age is :", age1);
    if (available1 == true) {
        console.log("your Are available");
    } else {
        console.log("your Are Not available");
    }
    console.log("your last Skill is :", lastSkill1);
}
else if (chosen == 2) {
    console.log("your Name is :", title2);
    console.log("your age is :", age2);
    if (available2 == true) {
        console.log("your Are available");
    } else {
        console.log("your Are Not available");
    }
    console.log("your last Skill is :", lastSkill2);
}
else if (chosen == 3) {
    console.log("your Name is :", title3);
    console.log("your age is :", age3);
    if (available3 == true) {
        console.log("your Are available");
    } else {
        console.log("your Are Not available");
    }
    console.log("your last Skill is :", lastSkill3);
};
