console.log("%c===> [DOM] #91 <===", "color:red");
/*
=> DOM [Deal with Childrens]
--- children
--- childNodes
--- firstChild
--- lastChild
--- firstElementChild
--- lastElementChild
 */

let myElement = document.querySelector("div");
console.log(myElement);
console.log(myElement.children[0]);
console.log(myElement.childNodes[0]);
console.log(myElement.firstChild);
console.log(myElement.lastChild);

console.log(myElement.firstElementChild);
console.log(myElement.lastElementChild);