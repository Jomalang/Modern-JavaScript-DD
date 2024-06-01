var i = 10;

//for문에서 선언한 i조차 전역변수이다... 근데 중복 선언까지 허용한다. 
for(var i = 0; i<5; i++){
    console.log(i);
}

console.log(i);