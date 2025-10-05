/*
=> Object :
--- Create Object With Assign Method
*/

console.log("%c===> [Assign method] #85 <===", "color:red");

let obj1 = {
    prop1: 1,
    meth1: function () {
        return this.prop1;
    },
};

let obj2 = {
    prop2: 2,
    prop1: 11,
    meth2: function () {
        return this.prop2;
    },
};

let targetObject = {
    prop1: 10,
    prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);
console.log(finalObject);

finalObject.prop4 = 4;
finalObject.prop1 = 100;
console.log(finalObject);

// <<==========================================>>//

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6, });
console.log(newObject);