console.log("%c===> [DOM] #92 <===", "color:red");
/*
=> DOM [Events]
- Use Events on html
- Use Events on js
--- onclick
--- oncontextmenu
--- onmouseenter
--- onmouseleave

--- onload
--- onscroll
--- onresize

--- onfocus
--- onblur
--- onsubmit
 */

let btn = document.querySelector("#btn");

btn.oncontextmenu = function () {
    console.log("Clicked Js");
};

window.onscroll = function () {
    console.log("Scroll");
};
