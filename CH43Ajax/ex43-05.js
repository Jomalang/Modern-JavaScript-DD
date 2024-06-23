const todos = [
    {id:1, content: 'HTML', completed: false},
    {id:2, content: 'CSS', completed: true},
    {id:3, content: 'JavaScript', completed: false}
];

//직렬화
const json = JSON.stringify(todos);

//JSON포맷의 문자열을 배열로 변환, 배열의 요소까지 객체로 변환된다.
const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);