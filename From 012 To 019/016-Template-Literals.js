/*
=> Template Literals (Template Strings) :
*/
let a1 = "We Love";
let b1 = "C";
let c1 = "And";
let d1 = "C++";

console.log(a1+' '+b1+'\n'+c1+' '+d1);
console.log(`${a1} ${b1}""''\\
${c1} ${d1}`);
console.log(`${(200+100)*2}`);

let title = "Ouhri";
let desc = "The Future is Good";

let markup = `
<div class="card">
    <div class="child">
    <h2>${title}</h2>
    <p>${desc}</p>
    </div>
</div>
`;
document.writeln(markup);