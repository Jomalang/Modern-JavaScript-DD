//생성자 함수
function Circle(radius){
    this.radius = radius;
}

Circle.prototype.getDiameter = function() {
    //this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    return 2*this.radius;
};

const circle = new Circle(5);
console.log(circle.getDiameter());