const user = {
    name: 'jo',
    address : {
        zipCode: '12345',
        city: 'seoul'
    }
};

//address프로퍼티의 키로 객체 추출, 이 객체의 city프로퍼티키로 값 추출
const {address: {city}} = user;
console.log(city);