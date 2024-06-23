const arr = [1,2,3,4];

//인덱스 1부터 2개의 요소를 제거하고, 그 자리에 새 요소 20,30을 삽입한다.
//splice는 제거한 요소를 배열로 반환한다.
const result = arr.splice(1,2,20,30);

console.log(result);
console.log(arr);