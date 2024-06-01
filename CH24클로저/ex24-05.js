const x = 1;

function outer() {
    const x = 10;
    const inner = function(){ 
        console.log(x);
    };

    return inner;
}

// outer()는 inner를 반환하고 생명주기 마감
const innerFunc = outer();

//이후 outer실행컨텍스트가 제거되었지만, inner가 outer의 변수 x에 접근가능
innerFunc();

