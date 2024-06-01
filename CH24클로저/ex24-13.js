const Counter = (function() {
    let num = 0;

    //생성자 함수
    function Counter() {

    }

    //생성자 함수 프로토타입에 메서드 추가(클로저들)
    //클로저가 정의될때 외부 렉시컬은 즉시실행함수이다.
    Counter.prototype.increase = function () {
        return ++num;
    };

    Counter.prototype.decrease = function () {
        return --num;
    };

    //함수 객체 반환
    return Counter;

}());


//함수 객체를 생성자함수로 호출
const counter = new Counter();

console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.decrease());

