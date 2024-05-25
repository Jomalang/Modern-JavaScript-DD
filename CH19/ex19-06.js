const obj = {};

const parent = {x: 1};

//getter인 get __proto__가 호출되어 obj 객체의 프로토타입을 반환한다.
console.log(obj.__proto__);

//세터 역할도 해서, prototype을 갈아낄 수도 있다...!
obj.__proto__ = parent;

console.log(obj.__proto__); 