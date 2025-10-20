console.log("%c===> [Destructuring-object] #119 <===", "color:red");
/*
===> Destructuring Object 
*/

const user = {
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

const { fName: aa,
    age: bb,
    country,
    color: co = "red",
    skills: { html: ht,
        css: cs, }
} = user;

console.log(aa);
console.log(bb);
console.log(country);
console.log(co);
console.log(`my Html skill progress is ${ht}`);
console.log(`my css skill progress is ${cs}`);

const { html: skillOne, css: skillTwo } = user.skills;
console.log(`skill One is ${skillOne}`);
console.log(`skill two is ${skillTwo}`);