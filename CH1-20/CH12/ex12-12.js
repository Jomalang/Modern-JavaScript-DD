console.dir(add);
console.dir(sub);

console.log(add(2,5));
console.log(sub(2,5));

//함수 선언문
function add(x, y){
    return x+ y;
}

//함수 표현식
var sub = function(x, y){
    return x -y;
}