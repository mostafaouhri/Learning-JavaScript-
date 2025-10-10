console.log("%c===> [DOM] #96 <===", "color:red");

/*
=> DOM [CSS]
--- Style
--- CssText
--- removeProperty(propertyName) [inline, stylesheet]
--- setProperty(propertyName, value, priority)
*/

element2.style.color = "red";
element2.style.fontWeight = "bold";

element2.style.cssText = "font-weight:bold; color:green; opacity:0.9;";

element2.style.removeProperty("color");
element2.style.setProperty("font-size", "40px", "important");

document.styleSheets[0].cssRules[0].style.removeProperty("line-height");
document.styleSheets[0].cssRules[0].style.setProperty("background-color","yellow");