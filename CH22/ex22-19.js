function getThisBinding() {
    return this;
}

//this로 사용할 객체
const thisArg = {a: 1};

console.log(getThisBinding());

console.log(getThisBinding.call(thisArg));
console.log(getThisBinding.apply(thisArg));