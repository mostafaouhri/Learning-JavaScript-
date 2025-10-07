console.log("%c===> [DOM] #93 <===", "color:red");

/*
=> DOM [Events]
--- validate from practice
--- prevent default
 */

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");
console.log(userInput[0]);

document.forms[1].onsubmit = function (event) {
    let userValid = false;
    let ageValid = false;

    console.log(userInput.value);
    console.log(userInput.value.length);

    if (userInput.value !== "" && userInput.value.length <= 10) {
        userValid = true;
    }
    if (ageInput.value !== "") {
        ageValid = true;
    }

    if (userValid === false || ageValid === false) {
        event.preventDefault();
    }
}

document.links[0].onclick = function (event) {
    console.log(event);
    event.preventDefault();
};




