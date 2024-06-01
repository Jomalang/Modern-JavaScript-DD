//함수를 인수로 전달받고 함수를 반환하는 고차 함수
//이 함수는 카운트 상태를 유지하기 위한 자유변수 counter를 기억하는 클로저를 반환한다
function makeCounter(aux){ //aux는 함수이다.
    //자유변수
    let counter = 0;

    //클로저 반환
    return function() {
        //인수로 전달받은 보조 함수에 상태변경 위임함
        counter = aux(counter);
        return counter;
    };
}

//보조 함수들 (헬퍼 펑션)
function increase(n) {
    return ++n;
}

function decrease(n) {
    return --n;
}

//함수로 함수 생성
//인수로 전달받은 함수는 클로저가 되서 반환된다
const increaser = makeCounter(increase);
console.log(increaser());
console.log(increaser());

const decreaser = makeCounter(decrease);
console.log(decreaser());
console.log(decreaser());

const increaser2 = makeCounter(increase);
console.log(increaser2());
console.log(increaser2());
