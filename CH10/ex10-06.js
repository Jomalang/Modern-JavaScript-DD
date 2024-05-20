var obj = {}; //obj는 빈 객체
var key = 'hello';

//동적 프로퍼티 키 생성
//ES5
obj[key] = 'world';

//ES6에서 개선된 버전
var obj = {[key]: 'world'};

console.log(obj)

console.log(obj[key]);
// console.log(obj[hello]); //no
console.log(obj.key); //undefined
console.log(obj.hello);