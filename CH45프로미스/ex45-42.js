const wrongUrl = 'http://jsonplaceholder.typicode.com/xxx/1';

fetch(wrongUrl)
    .then(()=> console.log('ok'))
    .catch(()=> console.log('error'));