function sum() {
    //arguments array로 전환
    var array = Array.prototype.slice.call(arguments);

    return array.reduce(function (pre, cur){
        return pre+cur;
    }, 0);
}

console.log(sum(2,4,6,7,8,20));