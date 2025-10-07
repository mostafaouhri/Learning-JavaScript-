console.log("%c===> [DOM] #90 <===", "color:red");
/*
=> DOM [Create Elements]
--- practice product with myHeading and paragraph
 */

for (let i = 1; i <= 100; i++) {

    let myDiv = document.createElement("div",);
    let myHeading = document.createElement("h2");
    let myP = document.createElement("p");

    let TextH3 = document.createTextNode("Product Title " + i);
    let myTextP = document.createTextNode("Product Decription");

    myDiv.setAttribute("class", "product");
    myDiv.setAttribute("style", "background:#ddd");
    myHeading.setAttribute("style", "color:red");
    myP.setAttribute("style", "color: #0b0a0a");

    myDiv.appendChild(myHeading);
    myDiv.appendChild(myP);

    myHeading.appendChild(TextH3);
    myP.appendChild(myTextP);

    document.body.appendChild(myDiv);
}

myHr = document.createElement("hr");
document.body.appendChild(myHr);
