console.log("%c===> [19.Object Oriented Programming] #158 <===", "color:#95089e;font-weight:bold");

// ---- Object Meta Data & Descriptor1

const myObject2 = {
    a: 1,
    b: 2,
};

Object.defineProperties(myObject2, {
    c: {
        configurable: true,
        value: 3,
    },
    d: {
        configurable: true,
        value: 4,
    },
    e: {
        configurable: true,
        value: 5,
    },
})

console.log(myObject2);
console.log(Object.getOwnPropertyDescriptor(myObject2, "d"));
console.log(Object.getOwnPropertyDescriptors(myObject2));

