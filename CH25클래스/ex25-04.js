class Person{
    //생성자
    constructor(name){
        this.name = name;
    }

    //프로토타입 메서드
    sayHi() {
        console.log(`hi, my name is ${this.name}`);
    }

    //정적 메서드
    static sayHello(){
        console.log('hello');
    }
}

const me = new Person('jo');

//인스턴스의 프로퍼티 참조
console.log(me.name);

//프로토타입 메서드 호출
me.sayHi();

//정적 메서드 호출
Person.sayHello();

