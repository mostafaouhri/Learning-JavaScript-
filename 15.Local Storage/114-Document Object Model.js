console.log("%c===> [BOM] #114 <===", "color:red");
/*
===> BOM [Browser Object Model]
--- BOM Challenge 
*/

let input = document.querySelector(".input");
let add = document.querySelector(".add");

let tasks = [];

add.onclick = function () {
    if (input.value.length != 0) {
        tasks.push(input.value);
    }
    window.localStorage.setItem("tasks", `${tasks}`)
};
one();

function one() {
    for (let i = 1; i <= window.localStorage.tasks.split(',').length; i++) {


        let element = document.querySelector(".form").cloneNode(1);
        let text = document.createTextNode(window.localStorage.tasks.split(',')[i]);
        console.log(text);

        document.querySelector(".tasks").append(element);
        document.querySelector(".tasks .form .input").setAttribute("disabled", "h");
        // document.querySelector(".tasks .form .input").append(text);
        document.querySelector(".tasks .form .add").setAttribute("value", "Delete");
        document.querySelector(".tasks .form .add").setAttribute("class", "delete");
    }
};

