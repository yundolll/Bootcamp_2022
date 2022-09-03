// 비교 연산자 🐹

1 > 3 // false
1 < 3 // true
-1 > 20 // false
-1 >= -1  // true

'a' < 'b' // true
// 문자열은 유니코드의 값에 따라 결정됨
// 'a'의 유니코드는 61, 'b'의 유니코드는 62




// 동등 연산자 🐹

// 👉 == (double equals)
// 두 값이 같은지 알 수 있음. 타입은 구분 안함
3 == 4  // false
3 == 3  // true
3 == '3' // true
// 두 값이 다른 타입이면 하나의 값을 강제로 변환시킴

null == undefined // true
0 == false // true



// 👉 === (triple equals) 
// 타입을 구분한 후, 값과 타입 모두 비교함
// 같은 타입으로 변환하는 과정을 거치지 않음
3 === '3' // false
null === undefined // false
0 === false // false



// 👉 !=    (not equal) 
// 타입이 같아지도록 타입을 전환한 후 비교함
1 != 2    // true
1 != '1'  // false



// 👉 !==   (non-equality) 
1 !== 1   // false
1 !== 2   // true
1 !== '1' // true