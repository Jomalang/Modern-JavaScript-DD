const person= {
    name: 'cho',
    sayHi() {
        console.log(`Hi ${this.name}`)
    }
};

person.sayHi();