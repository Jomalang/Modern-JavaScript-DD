const values = [1,2,3,4,5,6];

//마지막 순회이면 평균, 마지막 순회가 아니면 누적값 반환
const average = values.reduce((acc,cur,i,{length}) => {
    return i===(length -1) ? (acc + cur) / length : acc + cur;
},0)

console.log(average);