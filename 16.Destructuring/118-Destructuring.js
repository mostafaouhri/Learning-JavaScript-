console.log("%c===> [Destructuring-object] #118 <===", "color:red");
/*
===> Destructuring Object 
*/

user = {
    theName: "Mostafa",
    theAge: 26,
    theTitle: "Devloper",
    theCountry: "Morocco",
}

let { theName, theAge, theTitle, theCountry } = user;

({ theName, theAge, theTitle, theCountry } = user); // Update ...

console.log(theName);
console.log(theAge);
console.log(theTitle);
console.log(theCountry);