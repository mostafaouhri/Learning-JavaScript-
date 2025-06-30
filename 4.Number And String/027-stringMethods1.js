/*
=> String Methods 1 : 
- Access With Index
- Access With chartAt()
- length
- trim()
- toUpperCase()
- toLowerCase()
- Chain Methods
*/

var theName = "Ahmed";

console.log(theName);
console.log(theName[0]);
console.log(theName[1]);
console.log(theName[5]);

console.log(theName.charAt(0));
console.log(theName.charAt(1));
console.log(theName.charAt(4));
console.log(theName.charAt(5));

console.log(theName.length);

var theName = "  Ahm  ed  ";
console.log(theName.trim()); //remove white-space front back 

var theName = "Ahmed";
console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

var theName = "  Ahmed  ";
console.log(theName.trim().charAt(2).toUpperCase()); //Chain Methods
