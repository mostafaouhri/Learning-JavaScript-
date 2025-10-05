console.log("%c===> [DOM] #86 <===", "color:red");
/*
=> DOM :
--- what is DOM
--- DOM selectors
--- find element by id
--- find element by tag name
--- find element by class name
--- find element by css selectors
--- find element by collection
--- title
--- body
--- images
--- forms
--- links
*/

let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".special");
let myQueryAllElement = document.querySelectorAll("span");

console.log(myIdElement);
console.log(myTagElements);
console.log(myTagElements[0]);
console.log(myTagElements[0].innerHTML="Test 1");
console.log(myClassElement);
console.log(myClassElement[0]);
console.log(myQueryElement);
console.log(myQueryAllElement);
console.log(myQueryAllElement[1]);

console.log(" ");
console.log(document.title);
console.log(document.body);
console.log(document.head);
console.log(document.images);
console.log(document.forms[0].one.value);
console.log(document.links[0].href);