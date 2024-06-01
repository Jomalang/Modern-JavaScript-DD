(function (a, b) {
    console.log(a*b);
})(3, 5);


let ret = (function(a,b){
    return a+b;
}(1,2));

console.log(ret); //3