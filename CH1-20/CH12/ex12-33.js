function changeVal(primitive, obj){
    primitive += 100;
    obj.name = 'Kim';
}

//함수 외부
var num = 100;
var person = {name:'jo'};

console.log(num); //100
console.log(person); //jo

changeVal(num, person);

console.log(num); //100
console.log(person);//kim
