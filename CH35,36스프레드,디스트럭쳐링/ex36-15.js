const user = {firstName: 'hyonejin', lastName: 'jo'};

//프로퍼티 키가 lastName인 값을 변수 ln에 할당
//프로퍼티 키가 firstName인 값을 변수 fn에 할당
const {lastName: ln, firstName: fn} = user;
console.log(fn, ln);