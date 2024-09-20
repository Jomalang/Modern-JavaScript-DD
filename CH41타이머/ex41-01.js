setTimeout(() => console.log('hi'), 1000);


setTimeout(name => console.log(`hi ${name}.`), 1000, 'jo');


//delay를 생략하면 기본값 0이 저장된다.
setTimeout(() => console.log('hello!'));