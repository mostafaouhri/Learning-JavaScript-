console.log("%c===> [DOM] #89 <===", "color:red");
/*
=> DOM [Create Elements]
--- createElement
--- createComment
--- createTextNode
--- createAttribute
--- appendChild
 */

let myElement2 = document.createElement("div");
let myAttr = document.createAttribute("data-Custom");
let myText = document.createTextNode(" Product One");
let myComment = document.createComment("This is Div");

myElement2.className = "Product";
myElement2.setAttributeNode(myAttr);
myElement2.setAttribute("data-test", "testing");

// append comment to element
myElement2.appendChild(myComment);

// append text to element
myElement2.appendChild(myText);

// append element to Body
document.body.appendChild(myElement2);





