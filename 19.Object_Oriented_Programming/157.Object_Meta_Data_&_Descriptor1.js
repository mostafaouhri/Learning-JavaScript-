console.log("%c===> [19.Object Oriented Programming] #157 <===", "color:#95089e;font-weight:bold");

// ---- Object Meta Data & Descriptor1

const myObject = {
    a: 1,
    b: 2,
};

Object.defineProperty(myObject, "c", {
    writable: false, // Control update Value
    enumerable: false, // control Looping process
    configurable: true,
    value: 3,
});
Object.defineProperty(myObject, "c", {
    writable: false, // Control update Value
    enumerable: false, // control Looping process
    configurable: false, // cannot redefine property
    value: 200,
});

myObject.c = 100

for (let prop in myObject) {
    console.log(prop, myObject[prop]);
};

console.log(delete myObject.c);
console.log(myObject);

