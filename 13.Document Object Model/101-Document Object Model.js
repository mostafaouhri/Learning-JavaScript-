console.log("%c===> [DOM:challenge] #101 <===", "color:red");

/*
=> DOM [Challenge]
---  create page with Js only
*/

// create Footer Section --------------------------------------
let footerDiv = document.createElement("div");
let footerP = document.createElement("p");
let footerPText = document.createTextNode("Copyright 2025");

document.body.prepend(footerDiv);
footerDiv.append(footerP);
footerP.append(footerPText);

footerDiv.classList.add("footer");

footerDiv.style.backgroundColor = "#22a86d";

footerP.style.cssText = "margin: 0;";
footerP.style.color = "white";
footerP.style.textAlign = "Center";
footerP.style.setProperty("padding", "10px");
footerP.style.setProperty("font-family", "monospace");
footerP.style.setProperty("font-size", "20px");

// create Content Section ------------------------------------

let contentDiv = document.createElement('div');
contentDiv.setAttribute("class", "content");

contentDiv.style.display = "flex";
contentDiv.style.flexWrap = "wrap";

contentDiv.style.setProperty("background-color", " #ececec");


for (let i = 1; i <= 15; i++) {
    let productDiv = document.createElement('div');
    productDiv.classList.add("product");

    let productNum = document.createElement('span');
    let productNumValue = document.createTextNode(i);
    let productName = document.createTextNode('Product');

    document.body.prepend(contentDiv);
    contentDiv.append(productDiv);
    productDiv.append(productNum, productName);
    productNum.append(productNumValue);

    productDiv.style.cssText = "background-color: #fff; display: flex; flex-direction: column; align-items: center; font-family: fangsong;";
    productDiv.style.flexBasis = "calc(100% / 3 - 24px)";
    productDiv.style.flexGrow = "1";
    productDiv.style.setProperty("margin", "10px 6px");
    productDiv.style.setProperty("height", "50px");
    productDiv.style.setProperty("justify-content", "center");
}

// create Header Section ------------------------------------
let headerDiv = document.createElement('div');
headerDiv.classList.add('header');
document.body.prepend(headerDiv);

let logoDiv = document.createElement('div');
let logoDivText = document.createTextNode('Ouhri');
logoDiv.append(logoDivText);

let linksDiv = document.createElement('div');
let linksUl = document.createElement('ul');
let linksli1 = document.createElement('li');
let linksli2 = document.createElement('li');
let linksli3 = document.createElement('li');
let linksli4 = document.createElement('li');
let linksli1Text = document.createTextNode('Home');
let linksli2Text = document.createTextNode('About');
let linksli3Text = document.createTextNode('Service');
let linksli4Text = document.createTextNode('Contact');

linksli1.classList.add('li');
linksli2.classList.add('li');

linksDiv.append(linksUl);
linksUl.append(linksli1, linksli2, linksli3, linksli4);
linksli1.append(linksli1Text);
linksli2.append(linksli2Text);
linksli3.append(linksli3Text);
linksli4.append(linksli4Text);

headerDiv.append(logoDiv, linksDiv);

headerDiv.style.setProperty('display', 'flex');
headerDiv.style.setProperty('justify-content', 'space-between');
headerDiv.style.setProperty('align-items', 'center');

logoDiv.style.color = "#22a86d";
logoDiv.style.fontWeight = "bold";
logoDiv.style.fontSize = "30px";
logoDiv.style.fontFamily = "cursive";
logoDiv.style.marginLeft = "10px";

linksUl.style.listStyle = "none";
linksUl.style.display = "flex";
linksUl.style.columnGap = "20px";


linksli1.style.setProperty('color', 'red');
linksli1.style.setProperty('font-size', '18px');

logoDiv.classList.add('logo');
linksUl.classList.add('menu');