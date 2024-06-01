//생성자 함수
function Person() {
    this.name = name;
}

//프로토타입 메서드 추가
Person.prototype.sayHello = function() {
    console.log(`hi, my name is ${this.name}`);
}

//정적 프로퍼티 추가  //(프로토타입 객체에 없음)
Person.staticProp = `static prop`;

//정적 메서드 추가 //(프로토타입 객체에 없음)
Person.staticMethod = function() {
    console.log(`staticMethod`);
};

//인스턴스 생성
const me = new Person('jo'); 

//생성자 함수가 가진 정적 프로퍼티 및 메서드는 생성자 함수명으로 참조/호출한다
Person.staticMethod();

//인스턴스는 정적 프로퍼티/메서드를 참조/호출할 수 없다.
//인스턴스가 호출할 수 있는 대상은 프로토타입 체인상에 존재해야 하기 때문.

