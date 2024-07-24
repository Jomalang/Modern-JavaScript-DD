//제너레이터 함수
function* genFunc() {
    yield 1;
    yield 2;
    yield 3;
}

// 제너레이터 함수를 호출하면 제너레이터 객체를 반환함.
const generator = genFunc();


//제너레이터 객체는 이터러블이면서 이터레이터
console.log(Symbol.iterator in generator);
console.log('next' in generator);