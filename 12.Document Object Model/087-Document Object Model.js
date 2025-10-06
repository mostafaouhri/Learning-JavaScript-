console.log("%c===> [DOM] #87 <===", "color:red");
/*
=> DOM [get / set elements content and attributes]
--- innerHtml
--- textContent
--- change attributes directly 
--- change attributes with methods
--- getAttribute
--- setAttribute

=> Search 
--- innerText
 */

let myElement = document.querySelector(".js")
console.log(myElement);
console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML = "text from <span> main.js </span> file";
myElement.textContent = "text from <span> main.js </span> file";

document.images[0].src = "https://Google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "picture";
document.images[0].className = "img";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("tittle", "twitter");