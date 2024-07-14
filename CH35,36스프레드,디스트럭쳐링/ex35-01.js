console.log(...[1,2,3]);

console.log(...'Hello');

//Map과 Set은 이터러블이다.
console.log(... new Map([['a','1'],['b','2']]));
console.log(... new Set([1, 2, 3]));


//이터러블이 아닌 일반 객체는 스프레드 문법을 사용할 수 없다
// console.log(...{a: 1, b: 2});