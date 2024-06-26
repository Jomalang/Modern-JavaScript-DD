const url = 'https://jsonplaceholder.typicode.com';

//id가 1인 post의 userId취득
promiseGet(`${url}/posts/1`)
//취득한 post의 userId로 user정보 취득
.then(({userId}) => promiseGet(`${url}/user/${userId}`))
.then(userInfo => console.log(userInfo))
.catch(err => console.error(err));