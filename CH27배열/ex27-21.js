//전달된 아규먼트가 1개이고 숫자일 경우, 전달된 인수는 length값이 된다.
const arr = new Array(10);
console.log(arr);
console.log(arr.length);


//전달된 인수가 2개 이상이면 인수를 요소로 갖는 배열을 생성한다
const arr1 = new Array(1,2,3);

const arr2 = new Array({});

console.log(arr1);
console.log(arr2);

const arr3 = Array.of(1);
console.log(arr3);