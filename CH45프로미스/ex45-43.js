const wrongUrl = 'https://jsonplaceholder.typicode.com/xxx/1';

//부적절한 url이 지정되었기 때문에 404 not found에러가 발생한다.
fetch(wrongUrl)
    .then(response => {
        //ok가 false이면 예외 던지기
        if(!response.ok) throw new Error(response.statusText);
        //아니라면, json을 역직렬화한 객체 반환
        return response.json();
    })