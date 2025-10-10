console.log("%c===> [DOM] #94 <===", "color:red");

/*
=> DOM [Events Simulation]
--- Click
--- focus
--- Blur
 */

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
    two.focus();
};

one.onblur = function () {
    document.links[0].click();
}


