const get = (url, successCallback, failureCallback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () =>{
        //요청 성공시
        if(xhr.status == 200){
            successCallback(JSON.parse(xhr.response));
        //요청 실패시
        } else{
            failureCallback(xhr.status);
        }
    };
};

//id가 1인 post취득
//서버 응답에 대한 후속 처리를 위한 콜백 함수를 비동기 함수 get에 전달
get('https//jsonplaceholder.typicode.com/posts/1', console.log, console.error);