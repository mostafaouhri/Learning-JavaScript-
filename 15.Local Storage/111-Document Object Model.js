/*
===> BOM [Browser Object Model]
- local Storage
--- setItem
--- getItem
--- removeItem
--- clear
--- key

===> Info 
--- No expiration Time 
--- HTTP And Https 
--- private Tab
*/
console.log("%c===> [BOM] #111 <===", "color:red");

// window.localStorage
window.localStorage.setItem("color", "red");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

console.log(window.localStorage);
console.log(typeof window.localStorage);

// get 
console.log(window.localStorage.getItem('color'));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);


// clear all
window.localStorage.clear();

// set Color in page 
document.body.style.backgroundColor = window.localStorage.getItem('color');

// get key
console.log(window.localStorage.key(0));

// remove one
window.localStorage.removeItem('fontWeight');
