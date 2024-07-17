const map = new Map();

//객체
const jo = {name:'jo'};
const kim = {name: 'kim'};

//객체도 키로 사용할 수 있다.
map.set(jo, 'developer')
    .set(kim,'dataEnginer');

console.log(map);