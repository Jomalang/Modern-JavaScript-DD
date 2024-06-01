const person = {
    name: 'jo',
    address: 'seoul'
};

console.log('name' in person); //true
console.log('address' in person) //true
console.log('life' in person) //false

console.log(Reflect.has(person, 'toString')) //true
console.log(person.hasOwnProperty('toString')); //false