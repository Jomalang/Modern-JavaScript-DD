const counter = {
    num: 1,
    //increase프로퍼티에 할당된 화살표 함수의 상위는 전역이다.
    increase: () => ++this.num
    
};

console.log(counter.increase()); //NaN