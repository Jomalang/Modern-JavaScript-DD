const myProto = {x: 10};

const obj = {
    y: 20,
    __proto__:myProto,
};

console.log(Object.getPrototypeOf(obj) === myProto); //true
