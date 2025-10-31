// if Challenge 

var b = 10;

if (b < 10)
    console.log(10);
else if (b >= 10 && b <= 40)
    console.log('10 To 40');
else if (b > 40)
    console.log('> 40');
else
    console.log('Unkown');

    // Ternary :
b < 10 ? console.log(10) 
: b >= 10 && b <= 40 ? console.log('10 To 40') 
: b > 40 ? console.log('> 40') 
: console.log('Unkown');

var st = "Elzero Web School";

if( ((st.length-1) + (st.length-1)).toString() === "34") 
console.log('Good');

// if(  "w" === "W") 
// console.log('Nice');
// F-Me

if( typeof st  === "string") 
console.log("very Good");

if(typeof 5 === "number") 
console.log("Nice");

if( st.slice(0,6).repeat(2) === "ElzeroElzero") 
console.log("Go Up");

console.log("------------------------");