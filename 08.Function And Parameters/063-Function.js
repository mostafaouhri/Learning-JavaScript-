
// Function - Random Arguments Function Challenge :
// - create function showDetails
// - function accept 3 parameters [a,b,c]
// - data type for info is 
// ----string => name
// ----number => age
// ----boolean => status
// - argument is random 
// - data is not sorted output depend on data types
// - use ternary conditional operator
console.log("----- Function - Random Arguments Function Challenge ------");

function showDetails(...nums) {
    let name, age, status;
    for (let i = 0; i < nums.length; i++) {
        typeof (nums[i]) === "string" ? name = nums[i] : typeof (nums[i]) === "number" ? age = nums[i] : status = nums[i];
    }

    status == true ? console.log("Hello ".concat(name, ", ", "Your Age Is ", age, ", You Are Available For Hire"))
        : console.log("Hello ".concat(name, ", ", "Your Age Is ", age, ", You Are Not Available For Hire"));
}

showDetails("Mostafa", 26, true); // Hello Mostafa, Your Age Is 26, You Are Available For Hire 
showDetails(26, "Mostafa", true); // Hello Mostafa, Your Age Is 26, You Are Available For Hire 
showDetails(true, 26, "Mostafa"); // Hello Mostafa, Your Age Is 26, You Are Available For Hire 
showDetails(false, "Mostafa", 26); // Hello Mostafa, Your Age Is 26, You Are Not Available For Hire 


