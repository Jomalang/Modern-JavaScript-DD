//즉시 실행 함수가 반환하는 값을 받는다.
//즉시 실행 함수가 종료됨과 동시에 num은 식별자 increase로도 접근할 수 없다.
const increase = (function() {
    let num = 0;

    return function() {
        return ++num;
    };
}());


console.log(increase());
console.log(increase());
console.log(increase());