console.log("%c===> [DOM] #100 <===", "color:red");

/*
=> DOM [Add Event Listener]
--- addEventListener
--- use without on
--- attach multiple events
--- Error Test

==> Search :
- Capture & bubbling javascript
- removeEventListener
*/

let p100 = document.querySelector(".p100");



// console.log(newP);

// p100.onclick = function () {
//     console.log("Message From OnClick");
    // onee();
    // twoo();
// };

// p100.onclick = onee(),twoo();

function onee() {
    console.log("Message From OnClick 1");
};

function twoo() {
    console.log("Message From OnClick 2");
};

p100.addEventListener("click", function () {
    console.log("Message From OnClick Event");
});

p100.addEventListener("click", onee);
p100.addEventListener("click", twoo);


//---------------------------------------------------------
p100.onclick = function () {
    let newP = p100.cloneNode(true);
    newP.className = "clone";
    p100.after(newP);
};


// let cloned = document.querySelector(".clone");// Error

// cloned.onclick = function () {
//     console.log("Iam Cloned");
// };


document.addEventListener("click", function (event) {
    if (event.target.className === "clone") {
        console.log("Iam Cloned");
    }
});
