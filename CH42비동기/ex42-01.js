function foo() {
    console.log('foo');
}

function bar() {
    console.log('bar');
}

//setTimeout은 일정 시간이 경과한 이후에 콜백함수인 foo을 호출한다
//setTimeout은 bar를 블로킹 하지 않는다.
setTimeout(foo, 3*1000);
bar();