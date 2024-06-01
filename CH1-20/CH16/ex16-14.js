function deepFreeze(target){
    //객체이면서, 아직 동결되지 않은 객체들을 대상으로 한다
    if(target && typeof target === 'object' && !Object.isFrozen(target)){
        Object.freeze(target);
        //Object.key메서드는 객체 자신의 열거가능한 프로퍼티 키를 배열로 반환한다.
        //forEach메서드는 배열을 순회하며 배열 각 요소에 콜백함수를 실행한다
        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}

const person = {
    name: 'jo',
    address: {city: 'seoul'}
};
person.address.city = 'busan';
console.log(person.address.city); //busan

// 깊은 객체 동결
deepFreeze(person);

person.address.city = 'seoul';
console.log(person.address.city); //busan