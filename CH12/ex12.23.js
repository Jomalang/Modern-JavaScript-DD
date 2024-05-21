function add(x = 0,y = 0){ //기본값 전달
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new TypeError('인수는 모두 숫자 값이어야 합니다')
    }
    return x+y;
}
console.log(add(2));
console.log(add('a','b'));
