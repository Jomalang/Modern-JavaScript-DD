class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //게터
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    //세터
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

const me = new Person('hyeon', 'jo');


//getter
console.log(me.fullName);

//setter
me.fullName = 'hyeonjin jo';
console.log(me.fullName);