const person = {};

//데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
    value: 'hyeonjin',
    writable: true,
    enumerable: true,
    configurable: true
});
//데이터 프로퍼티 정의
Object.defineProperty(person, 'lastName', {
    value: 'Jo',
    writable: false, //flase일때 값을 변경하려면 예외는 나오지 않고 그냥 무시된다.
    enumerable: false,  
    configurable: false //flase일때 값을 삭제하려면 그냥 무시된다. 재정의도 안된다.
});

//접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    set(name){
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
});

