class Base {
    constructor(name){
        this.name = name;
    }    

    sayHi() {
        return `hi ${this.name}`;
    }
}

class Derived extends Base {
   sayHi() {
    return `${super.sayHi()}. how are you doing`;
   } 
}

const derived = new Derived('hyonejin');
console.log(derived.sayHi());