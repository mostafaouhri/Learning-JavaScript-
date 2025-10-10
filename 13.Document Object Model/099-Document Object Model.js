console.log("%c===> [DOM] #99 <===", "color:red");

/*
=> DOM [Cloning]
--- CloneNode(Deep)
*/

let myP = document.querySelector("#p1").cloneNode();
let myDiv = document.querySelector("#div2");

myP.id = `${myP.id}-Clone`;

myDiv.appendChild(myP);


