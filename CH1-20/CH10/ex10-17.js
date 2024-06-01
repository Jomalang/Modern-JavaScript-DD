var person ={}; //빈 객체

person.age = 20;
person.name = 'hyeonjin';

console.log(person);

delete person.age;
delete person.address;

console.log(person);