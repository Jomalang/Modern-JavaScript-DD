const circle = {
    //프로퍼티: 객체 고유의 상태 데이터
    radius: 5,
    // 메서드: 상태 데이터를 참조하고 조작하는 동작
    getDiameter() {
        return 2 * circle.radius;
    }
};

console.log(circle.getDiameter());