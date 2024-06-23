() => this.x;

//익명 함수에 상위 스코프의 this주입해야 화살표 함수와 동일해진다
(function() {return this.x;}).bind(this);