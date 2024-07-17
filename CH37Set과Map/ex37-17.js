const set = new Set([1,2,3]);

//Set은 set.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
console.log(Symbol.iterator in set);

//이터러블이기 때문에 for...of문을 사용가능.
for(const value of set){
    console.log(value);
}

//이터러블인 Set객체는 스프레드 문법 대상이다.
console.log([...set]);


//이터러블이라 배열디스트럭쳐링도 가능하다.
const [a, ...rest] = set;
console.log(a,rest);