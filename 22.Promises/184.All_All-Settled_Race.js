console.log("%c===> [22.Promises] #184 <===", "color:green; font-weight:bold");

// Promise :
// - All 
// - All Settled
// - Race

const myFirstPromise = new Promise((res, rej) => {
    setTimeout(_ => {
        res("Iam the first Promise");
    }, 5000);
});

const mySecondPromise = new Promise((res, rej) => {
    setTimeout(_ => {
        res("Iam the second Promise");
    }, 1000);
});

const myThirdPromise = new Promise((res, rej) => {
    setTimeout(_ => {
        rej("Iam the Third Promise");
    }, 2000);
});

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise])
//     .then(
//         (resolvedValues) => console.log(resolvedValues),
//         (rejectedValues) => console.log(`Rejected => ${rejectedValues}`)
//     );

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise])
//     .then(
//         (resolvedValues) => console.log(resolvedValues),
//         (rejectedValues) => console.log(`Rejected => ${rejectedValues}`)
//     );

Promise.race([myFirstPromise, mySecondPromise, myThirdPromise])
    .then(
        (resolvedValues) => console.log(resolvedValues),
        (rejectedValues) => console.log(`Rejected => ${rejectedValues}`)
    );
