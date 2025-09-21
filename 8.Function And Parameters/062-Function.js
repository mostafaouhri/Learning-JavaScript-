
// Function Advanced Practice :
// - Parameters
// - Default
// - Rest
// - Loop
// - Condition

console.log("-----------");

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
    document.writeln(`<div>`);
    document.writeln(`<h2>Welcome, ${us}</h2>`);
    document.writeln(`<p>Age: ${ag}</p>`);
    document.writeln(`<p>Hour Rate: ${rt}$</p>`);
    if (show === "Yes") {
        if (sk.length > 0) {
            document.writeln(`<p>Skills: ${sk.join(" | ")}</p>`);
        }
        else {
            document.writeln(`<p>Skills: No Skills</p>`);
        }
    }
    else {
        if (sk.length > 0) {
            document.writeln(`<p>Skills Is Hidden </p>`);
        }
        else {
            document.writeln(`<p>Skills Is Hidden But There Is No Skills</p>`);
        }
    }
    document.writeln(`</div>`);
}

showInfo("Mostafa", 26, 20, "Yes", "Helpful", "Hard Working", "Smart");