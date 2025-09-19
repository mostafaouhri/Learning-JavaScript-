//  Products Practice (Add Products To Page):
console.log("---------Products Practice----------");
let products4 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];
let colors4 = ["red", "green", "blue"];
let showCount = 3;

document.writeln(`<h1>Show ${showCount} Products :</h1>`);

for (let i = 0; i < showCount; i++) {
    document.writeln(`<div>`);
    document.writeln(`<h3>[${i + 1}] ${products4[i]}</h3>`);
    for (let j = 0; j < colors4.length; j++) {
        document.writeln(`<p>${colors4[j]}</p>`);

    }
    document.writeln(`<p>${colors4.join(" || ")} :</p>`);

    document.writeln(`</div>`);

}