const person = {
    name: 'jo',
    foo(callback){
        setTimeout(callback.bind(this), 100);
    }
};

person.foo(function() {
    console.log(`hi! my name is ${this.name}.`);
});