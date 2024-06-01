const counter = (function() {
    let num = 0;

    //객체 리터럴
    //객체 리터럴은 스코프를 만들지 않는다는것을 이용
    //참고로 객체 내 프로퍼티는 public하다. 객체 식별자 counter통해 외부에서 접근가능하다..
    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    };
}());


console.log(counter.increase());
console.log(counter.increase());


console.log(counter.decrease());
console.log(counter.decrease());
