// const 와 var 🩰


// 1. const 🐚
//const 는 constant의 줄임말. (상수의 줄임말)
//상수는 항상 일정한 값이다. 바뀌지 않는다.

const luckyNum = 2;

//const는 값을 변경할 수 없는데 왜 쓰는거야?
// -> 원주율 값이나 변하지 않는 것의 확실한 값을 유지할 경우에 유용하게 씀
// * 변할 수 있는 값을 사용할 때는 let을 사용하기 ! 🥶


const birthday = '7월 22일';
// birthday = 5;  에러 뜸.
console.log(birthday);





// 2. var 🐚
// 너무 옛날 방식임

var runDistance = 26.2;

//var는 예전에 변수를 만드는 유일한 방법이었지만, 
// let 과 const가 생긴 이후 안쓰임. var를 쓸 이유가 없음



// * 정리 * 🌛

// let은 재할당이 가능한 변수를 만들 수 있고,
// const 는 상구 값인 변수를 만들 수 있음.