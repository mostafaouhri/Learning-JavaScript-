console.log("%c===> [BOM] #109 <===", "color:red");
/*
===> BOM [Browser Object Model]
--- stop()
--- print()
--- focus()
--- scrollTo(x, y || options)
--- scroll(x, y || options)
--- scrollBy(x, y || options)
*/

let myNewWindow = window.open("https://google.com", "", "weight=500,height=500");

// myNewWindow.focus();
myNewWindow.close();

// window.scrollTo(500, 200);
// window.scrollBy(500, 200);

// window.scrollTo({
//     left: 1500,
//     top: 1200,
//     behavior: "smooth"
// });