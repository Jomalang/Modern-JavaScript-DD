const Person = (function() {
    function Person(name){
        this.name = name;
    }

    //생성자 함수와 매핑된 Prototype을 프로퍼티 통해 교체
    Person.prototype = {
        constructor: Person,
        sayHello() {
            console.log(`hi, my name is ${this.name}`);
        }
    };

    return Person;
}());

const me = new Person('jo');

me.sayHello()

