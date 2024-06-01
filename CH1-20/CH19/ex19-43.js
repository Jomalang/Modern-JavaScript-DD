//원본 프로토타입과 참조되어있는 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('jo');


//프로토타입으로 교체할 객체
const parent = {
    sayHello() {
        console.log(`hi, my name is ${this.name}`);
    }
};


//프로토타입 교체
Object.setPrototypeOf(me, parent); // me.__proto__ = parent;

me.sayHello();
