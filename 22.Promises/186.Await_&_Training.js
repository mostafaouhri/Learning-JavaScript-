console.log("%c===> [22.Promises] #186 <===", "color:green; font-weight:bold");

// Await

const myPromise = new Promise((resolve, reject) => {
    setTimeout(_ => {
        // resolve("Iam The Good Promise");
        reject(Error("Iam The Bad Promise"));
    }, 3000);
});

async function readData() {
    console.log("Before Promise");
    // myPromise.then((resolvedValue) => console.log(resolvedValue));
    // console.log(await myPromise);
    console.log(await myPromise.catch((err) => err));
    console.log("After Promise");

};

readData();