var person = {
    name: 'Jo',
    sayHello : function() {
        console.log(this);
        console.log(`Hello my name is ${this.name}.`);
    }
};


console.log(typeof person)
console.log(person);
console.log(person.sayHello);

person.sayHello();
person.sayHello.call();