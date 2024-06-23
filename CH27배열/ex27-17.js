const sparse = [, 2, , 4];

//length값은 요소의 개수와 일치하지 않는다
console.log(sparse.length); //4
console.log(sparse);

//배열 sparse에는 인덱스가 0, 2인 요소가 존재하지 않는다
console.log(Object.getOwnPropertyDescriptors(sparse));


