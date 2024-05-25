//일반 객체의 __proto__는 접근자 프로퍼티임.

console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));

//함수 객체의 prototype은 데이터 프로퍼티임.
console.log(Object.getOwnPropertyDescriptor(function() {}, 'prototype'));