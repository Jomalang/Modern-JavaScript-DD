//유사 배열 객체를 변환해 배열 생성
let arr = Array.from({length: 2, 0: 'a', 1: 'b'});
arr.forEach(x => process.stdout.write(x));
console.log();

let arr2 = Array.from('hello');
arr2.forEach(x => process.stdout.write(x));
console.log();

let arr3 = Array.from({length: 3}, (_, i) => i);
process.stdout.write(arr3.join(', '));