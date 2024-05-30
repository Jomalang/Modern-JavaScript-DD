const person = {
    name:'jo',
    address: 'seoul',
    age: '20'

};

for(const key in person){
    console.log(key+': '+person[key]);
}