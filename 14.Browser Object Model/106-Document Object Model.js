console.log("%c===> [BOM] #106 <===", "color:red");
/*
===> BOM [Browser Object Model]
--- location object 
--- href Get / Set [URL || Hash || file || Mail]
--- host
--- hash
--- protocol
--- reload()
--- replace()
--- assign()
*/

console.log(location);
console.log(location.href);

// location.href = "https://google.com";
location.href = "#sec02";

console.log(location.host);
console.log(location.hostname);

console.log(location.protocol);
console.log(location.hash);

// location.reload();

// location.replace("https://google.com");
// location.assign("https://google.com");


