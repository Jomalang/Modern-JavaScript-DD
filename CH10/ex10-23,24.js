//ES5
var obj = {
    name: 'jo',
    sayHi: function() {
        console.log('hi! '+ this.name);
    }
};

obj.sayHi();


//ES6
const obj1 = {
    name: 'jo',
    //메서드 축약 표현
    sayHi(){
        console.log('hi! '+ this.name);
    }
}

obj1.sayHi();

const a = new obj.sayHi();
// const b = new obj1.sayHi(); //not work
