const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];

const count = fruits.reduce((acc, cur)=> {
    //acc[cur]가 truthy하다면 1을 더하고, 0(falsy)하다면 기본값 0에 1을 더한다
    //JAVA해시맵의 getOrDefalut와 동일한 기능
    acc[cur] = (acc[cur] || 0)+1;
    return acc;
}, {});

console.log(count);