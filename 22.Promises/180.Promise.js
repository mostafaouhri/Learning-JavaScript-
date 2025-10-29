console.log("%c===> [22.Promises] #180 <===", "color:green; font-weight:bold");

// Promise

const myPromise = new Promise((resolveFunction, rejectFunction) => {
    let connect = false;
    if (connect) {
        resolveFunction("Connection Established");
    } else {
        rejectFunction(Error("Connection Failed"));
    }
})

console.log(myPromise);

let resolver = ((resolve) => console.log(`Good ${resolve}`));
let rejecter = (reject) => console.log(`Bad ${reject}`);

myPromise.then(resolver, rejecter);
