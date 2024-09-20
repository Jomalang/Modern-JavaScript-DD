const array = [1, 2, 3];

console.log(Symbol.iterator in array); //true

//이터러블  배열을 for...of 문으로 순회하기
for (const item of array) {
  console.log(item);
}

//이터러블에 스프레드 문법 적용하기
console.log([...array]);

//이터러블에 배열 디스트럭쳐링 사용하기
[a, ...rest] = array;

console.log(a, rest);
