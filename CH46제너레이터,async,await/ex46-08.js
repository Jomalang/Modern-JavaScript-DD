//제너레이터 함수
function* genFunc() {
  yield 1;
  yield 2;
  yield 3;
}

//제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
//제너레이터 객체는 next메서드를 갖는다.
const generator = genFunc();

//처음 next를 호출하면 첫 번째 yield표현식까지 실행되고 일시 중지된다.
//next메서드는 이터레이터 result객체를 반환한다.
//value프로퍼티는 첫 번째 yield표현식에서 yield된 값인 1이 할당된다.
//done프로퍼티에는 제너레이터가 끝까지 실행되지 않았으므로 false가 할당된다.
console.log(generator.next());

console.log(generator.next());

console.log(generator.next());

console.log(generator.next());
