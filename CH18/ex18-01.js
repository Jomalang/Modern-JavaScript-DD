// 1.함수는 무명의 리터럴로 생성할 수 있다.
// 2.1 함수는 변수에 저장할 수 있다.
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체 생성되고 변수에 할당됨

const increase = function(num){
    return ++num;
};

const decrease = function(num){
    return --num;
};


//2.2함수는 객체에 저장할 수 있다.
const auxs = {increase, decrease};


//3.1 함수는 매개변수가 될 수 있다.
//4. 함수는 반환값으로 사용할 수 있다.

function makeCounter(aux){
    let num = 0;

    return function() {
        num = aux(num);
        return num;
    };
}


//3.2 함수는 매개변수로 함수를 전달할 수 있다.
const increaser = makeCounter(auxs.increase);

console.log(increaser()); //1
console.log(increaser()); //2

const decreaser = makeCounter(auxs.decrease);

console.log(decreaser()); //-1
console.log(decreaser()); //-2