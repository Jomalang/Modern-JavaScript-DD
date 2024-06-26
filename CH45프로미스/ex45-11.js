const promiseGet = url => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = () => {
            if(xhr.status == 200){
                //응답 성공
                resolve(JSON.parse(xhr.response));
            } else{
                //예외 발생시 처리
                reject(new Error(xhr.status));
            }
        };
    });
};