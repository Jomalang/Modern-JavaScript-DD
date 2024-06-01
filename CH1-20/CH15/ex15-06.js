let foo = 1; //전역 변수

{
    let foo = 2; //지역
    let bar = 3; //지역
}

console.log(foo);
console.log(bar);