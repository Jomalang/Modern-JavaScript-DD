function* genFunc() {
  //처음 next를 호출하면 첫번째 yield표현식까지 실행되고 일시 중지된다.
  //이때 yield된 값 1은 next메서드가 반환한 이터레이터 result객체의 value프로퍼티에 할당.
  // x변수에는 아직 아무것도 할당되지 않음. x변수의 값은 next메서드가 두 번째 호출될때 결정된다.
  const x = yield 1;

  //두번째 next메서드를 호출할 때 전달한 인수 10은 첫번째 yield표현식을 할당받는
  //x변수에 할당된다.
  const y = yield x + 10;

  return x + y;
}

const generator = genFunc(0);

//처음 호출하는 next메서드에는 인수를 전달하면 무시된다.
let res = generator.next();
console.log(res);

//next메서드에 인수로 전달한 10은 genFunc함수의 x변수에 할당된다.
//next메서드가 반환한 이터레이터 result객체의 value프로퍼티에는 두 번째 yield된 값인 20이 할당된다.
res = generator.next(10);
console.log(res);

res = generator.next(20);
console.log(res);
