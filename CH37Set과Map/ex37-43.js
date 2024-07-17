const lee ={name: 'lee'};
const kim = {name: 'kim'};

const map = new Map([[lee, 'developer'], [kim, 'designer']]);

//Map객체는 Map.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
console.log(Symbol.iterator in map);

//for... of문
for(const entry of map){
    console.log(entry);
}

//이터러블인 Map 객체는 스프레드 문법의 대상이 될 수 있다.
console.log([...map]);

//Map객체는 배열 디스트럭쳐링의 대상이 될 수 있다.
const [a,b] = map;
console.log(a,b);