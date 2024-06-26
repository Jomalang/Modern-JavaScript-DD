const request = {
    //method요청별로 메서드를 오버라이드 한다.
    get(url) {
        return fetch(url);
    },
    post(url, payload) {
        return fetch(url, {
            method: 'POST',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify(payload)
        });
    },
    patch(url, payload){
        return fetch(url, {
            method: 'PATCH',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify(payload)
        });
    },
    delete(url) {
        return fetch(url, {method: 'DELETE'});
    }
};