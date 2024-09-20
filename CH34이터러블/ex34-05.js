//배열은 이터러블 프로토콜을 준수하고 있다.
const array = [1, 2, 3];

const iterator = array[Symbol.iterator]();

console.log("next" in iterator);
