const [a,b,c = 3] = [1,2];
console.log(a,b,c);


//기본값보단 할당된 값이 우선함
const [e, f = 10, g = 3] = [1, 2];
console.log(e,f,g);

const [x, ...y] = [1,2,3];
console.log(x, y);