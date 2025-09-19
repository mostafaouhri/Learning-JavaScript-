//  Loop - Challenge :
console.log("--------- Challenge ----------");

let myAdmins = ["ahmed", "osama", "sayed", "stop", "walid"];
let myEmployees = ["amgad", "samah", "ameer", "omar", "othman", "amina", "samira", "anwar"];

let myAdminsCount = 0;
for (let i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "stop") {
        break;
    }
    myAdminsCount++;
}

document.writeln(`<div>We have X Admins </div>`);
document.writeln(`<div>We have ${myAdminsCount} Admins </div>`);
document.writeln(`<hr>`);

for (let i = 0; i < myAdminsCount; i++) {
    document.writeln(`<div>`);
    document.writeln(`The Admin For Team ${i + 1} Is ${myAdmins[i]} <br>`);
    document.writeln(`<h3>Team Members :</h3>`);
    let num = 1;
    for (let j = 0; j < myEmployees.length; j++) {
        if (myAdmins[i][0] === myEmployees[j][0]) {
            document.writeln(`<p>[${num}] ${myEmployees[j]}</p>`);
            num++;
        }
    }
    document.writeln(`<hr>`);
    document.writeln(`</div>`);

}

