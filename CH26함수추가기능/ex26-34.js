//중첨 함수 foo의 상위 스코프는 즉시실행함수
//따라서 화살표함수인 foo의 this는 즉시실행함수의this가 된다.
(function() {
    const foo = () => console.log(this);
    foo();
}).call({a:1});

//bar함수는 화살표 함수 반환
//bar가 반환하는 화살표의 this는 즉시실행함수의 this
(function() {
    const bar = () => () => console.log(this);
    bar()();
}).call({a:1});