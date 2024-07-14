// 객체 병합
// 프로퍼티가 중복되면 뒤에 위치한 프로퍼티가 우선권 가짐
const merged = {...{x: 1, y: 2}, ...{y: 10, z: 3}};
console.log(merged);

//프로퍼티 수정
const changed = {...{x: 1, y: 2}, y: 100};
console.log(changed);

//프로퍼티 추가
const added = {...{ x: 1, y: 2}, z: 0};
console.log(added);