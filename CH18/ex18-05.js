function multiply(x,y){
    //이터레이터
    //[]는 프로퍼티 접근 문법이다. 객체명[프로퍼티 키]로 접근함.
    //Symbol.iterator()를 실행시켜 이터레이터 객체를 가져온다
    const iterator = arguments[Symbol.iterator]();

    //위에서 가져온 iterator객체의 next메서드 호출해 순회 가능
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    return x+y;
}

console.log(multiply(1,2,3))

