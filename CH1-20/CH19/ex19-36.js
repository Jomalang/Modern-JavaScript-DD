const Person = (function() {
    //생성자 함수
    function Person(name){
        this.name = name;
    }

    //프로토타입 메서드
    Person.prototype.sayHello = function() {
        console.log(`Hi! My name is ${this.name}`);
    };

    //생성자 함수 반환
    return Person;

}());

const me = new Person('Jo');

//프로토타입 메서드와 이름이 같은 인스턴스 메서드
me.sayHello = function() {
    console.log(`hey! My name is ${this.name}`);
};

me.sayHello(); //인스턴스 메서드가 호출됨.