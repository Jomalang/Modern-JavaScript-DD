class Base{
    constructor(name){
        //생성될 인스턴스객체가 this바인딩됨
        this.name = name;
    }

    sayHi() {
        return `Hi! ${this.name}`;
    }
}

class Derived extends Base {
    //화살표 함수의 super는 상위 스코프인 constructor의 super를 가리킨다.
    sayHi = () => `${super.sayHi()} how are you doing?`;
    
}

const derived = new Derived('cho');
console.log(derived.sayHi());