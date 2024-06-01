var Counter = (function () {
    // private 변수
    var num = 0;


    //외부로 공개할 데이터나 메서드는 객체에 프로퍼티로 추가해 해당 객체 반환
    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    };
}());


console.log(Counter.num); //undefined 접근불가

console.log(Counter.increase());

console.log(Counter.decrease());