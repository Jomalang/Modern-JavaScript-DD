const {firstName = 'hyeonjin', lastName} = {lastName:'jo'};
console.log(firstName, lastName)

const {firstName:fn = 'hyeonjin', lastName:ln } = {lastName: 'jo'};
console.log(fn, ln);