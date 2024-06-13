//예전 방식
class Prefixer{
    constructor(prefix){
        this.prefix = prefix;
    }
    add(arr) { //정적 메서드
        //add메서드는 인수로 전달된 배열 arr를 순회해 배열의 모든 요소에 prefix를 추가하는 기능을 함.
        return arr.map(function(item){
            return this.prefix + item;
        });
    }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));

