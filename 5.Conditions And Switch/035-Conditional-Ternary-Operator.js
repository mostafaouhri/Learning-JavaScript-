// Conditional Ternary Operator :

var theName = "Leila";
var theGender = "female";
var theAge = 30;

if (theGender === "male") {
    console.log("Mr")
}
else {
    console.log("Mrs")
}

theGender === "male" ? console.log("Mr") : console.log("Mrs");

var result = theGender === "male" ? "Mr" : "Mrs";
document.writeln(result);

console.log(`Hello ${theName}`)

console.log(`Hello ${theGender === "male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20 ? console.log(20)
 : theAge > 20 && theAge < 60 ? console.log("20 to 60") 
 : theAge > 60 ? console.log("larger than 60") 
 : console.log("Unknown");