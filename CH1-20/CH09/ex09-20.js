var done = true;

var message = '';

//if문 사용
if(done) 
    message = '완료';

//&&로 if문 대체
message = done && '완료'; //done이 true일때 mesage에 '완료'할당하기

console.log(message);