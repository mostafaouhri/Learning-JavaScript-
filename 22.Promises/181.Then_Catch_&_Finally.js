console.log("%c===> [22.Promises] #181 <===", "color:green; font-weight:bold");

// Then, Catch & Finally

const myPromise2 = new Promise((resolveFunction, rejectFunction) => {
    // let employees = ["Mostafa", "Osama", "Rania", "Nada"];
    let employees = [];
    if (employees.length === 4) {
        resolveFunction(employees);
    } else {
        rejectFunction(Error("number of employees is not 4"));
    }
})
    .then(
        (resolve) => {
            resolve.length = 2;
            return resolve;
        }
    )
    .then(
        (resolve) => {
            resolve.length = 1;
            return resolve;
        }
    )
    .then(
        (resolve) => {
            console.log(`The choosen emplyee is ${resolve}`);
        }
    )
    .catch(
        (reject) => {
            console.log(reject);
        }
    )
    .finally(
        console.log(`The Operation is Done`)
    );
