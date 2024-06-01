const person = {
    firstName: 'hyeonjin',
    lastName : 'Jo',

    //getter
    //fullName은 접근자 함수로 구성된 접근자 프로퍼티이다.
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    //setter
    //JS에서 setter는 파라미터가 없으면 문법 오류임
    set fullName(name) {
        //배열 형태로 값 저장
        [this.firstName, this.lastName] = name.split(' ');
    }

};
//접근자 프로퍼티 setter이용
console.log(person.fullName);
//접근자 프로퍼티 getter이용
person.fullName = 'sumin jo'; 

console.log(person.fullName);

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);
descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');

