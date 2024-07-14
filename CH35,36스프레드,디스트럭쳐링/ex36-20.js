const todos = [
    {id: 1, content: 'html', completed: true},
    {id: 2, content: 'CSS', completed: false},
    {id: 3, content: 'JS', completed: false},
];

//todos 배열의 두 번째 요소 객체로부터 id 가져온다.
const [, {id}] = todos;

console.log(id);

