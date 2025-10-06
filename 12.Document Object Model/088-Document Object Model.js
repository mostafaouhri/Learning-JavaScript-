console.log("%c===> [DOM] #88 <===", "color:red");
/*
=> DOM [check attributes]
--- Element.attributes
--- Element.hasAttribute
--- Element.hasAttributes
--- Element.removeAttribute
 */

console.log(document.getElementsByTagName("p")[2].attributes);

let myP = document.getElementsByTagName("p")[2];

if (myP.hasAttribute("data-src")) {

    if (myP.getAttribute("data-src") === "") {
        myP.removeAttribute("data-src");
    }
    else {
        myP.setAttribute("data-src", "New Value")
    }
}
else {
    console.log("Not Found");
}

if (myP.hasAttributes()) {
    console.log(`Has Attributes`);
}

if (document.getElementsByTagName("div")[2].hasAttributes()) {
    console.log(`Has Attributes`);
}
else {
    console.log(`Not Has Attributes`);
}

