var circle = {
    radius: 5,

    getDiameter: function() {
        return 2 * this.radius; //여기서 this는 circle객체
    }
};

console.log(circle.getDiameter());