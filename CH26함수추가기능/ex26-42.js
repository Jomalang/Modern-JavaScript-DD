//생성자 함수
function Person(name){
    this.name = name;
}

Person.prototype.sayHi = function() {console.log(`hi ${this.name}`);};

const person = new Person(`cho`);
person.sayHi();