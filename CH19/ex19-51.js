// 프로토타입이 null인 객체 생성, 생성된 객체는 체인 종점에 있다.
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null); //true


// Object.prototype상속
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype); //true


//아래 코드는 obj = {x: 1}과 동일하다
obj = Object.create(Object.prototype, {
    x: {value: 1, writable: true, enumerable: true, configurable: true}
});
//또한 다음과도 동일하다
//obj = Object.create(Object.prototype);
//obj.x = 1;


//임의 객체 상속받기
const myProto = {x: 10};

obj = Object.create(myProto);
console.log(obj.x);
console.log(Object.getPrototypeOf(obj) === myProto);

//생성자 함수와 연결된 프로토타입 상속받기
function Person(name) {
    this.name = name;
}

obj = Object.create(Person.prototype);
obj.name = 'jo';

console.log(obj.name); //jo
console.log(Object.getPrototypeOf(obj) === Person.prototype); //true