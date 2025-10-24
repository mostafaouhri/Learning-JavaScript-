console.log("%c===> [Regular Expressions] #144 <===", "color:green");

/*
//    |=========> Regular Expressions <=========|
  - Form Validation
    --- Input Form Validation Practice
*/

document.getElementById("register").onsubmit = function () {
    let phoneInput = document.getElementById("phone").value;
    let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/g; // (1234) 567-9100
    let ValidationResult = phoneRe.test(phoneInput);
    console.log(ValidationResult);
    // return false;

    if (ValidationResult === false) {
        return false;
    }
    return true;
}; 
