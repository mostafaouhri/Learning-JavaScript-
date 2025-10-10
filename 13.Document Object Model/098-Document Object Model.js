console.log("%c===> [DOM] #98 <===", "color:red");

/*
=> DOM [Traversing]
--- nextSibling
--- previousSibling
--- nextElementSibling
--- previousElementSibling
--- parentElement
*/

let span = document.querySelector(".two2");

console.log(span.nextSibling);
console.log(span.nextElementSibling);

console.log(span.previousElementSibling);
console.log(span.parentElement);

span.onclick = function () {
    span.parentElement.style.backgroundColor = "pink";
}