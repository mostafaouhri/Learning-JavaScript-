console.log("%c===> [22.Promises] #179 <===", "color:green;font-weight:bold");

// Pyramid Of Doom || Callback Hell

function makeItRed(e) {
    e.target.style.color = "red";
};

let p = document.querySelector(".p-test");
p.addEventListener("click", makeItRed);

function iamACallback() {
    console.log("Iam A Callback Function");
};

setTimeout(iamACallback, 2000);

setTimeout(() => {
    console.log("Download photo from url");
    setTimeout(() => {
        console.log("resize photo");
        setTimeout(() => {
            console.log("add logo");
            setTimeout(() => {
                console.log("show the photo");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);