console.log("%c===> [DOM] #97 <===", "color:red");

/*
=> DOM [Deal with elements]
--- before [Element || String]
--- after [Element || String]
--- append [Element || String]
--- prepend [Element || String]
--- remove
*/

let element3 = document.getElementById("my-div2");
let createP = document.createElement("p");

element3.before("Hello From Js before");
element3.after("Hello From Js after");
element3.after(createP);

element3.prepend("prepend ");
element3.append("Append");

// element3.remove();
