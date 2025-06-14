let a = "Elzero Web School";


console.log(a.slice(2, 6)); //zero 
console.log(a.charAt(2) + a.charAt(3) + a.charAt(4) + a.charAt(5)); //zero 

console.log(a.charAt(13).toUpperCase().repeat(8)); //H*8 

console.log(a.split(" ",1)); // Elzero

console.log(a.substr(0,6) + a.substr(-7)); //Elzero School // deprecated

console.log(a.at(0).toLowerCase() + a.slice(1,length - 1).toUpperCase() + a.at(length-1).toLowerCase())