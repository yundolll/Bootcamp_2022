// console
// console 은 하나의 객체임
// Math객체를 생각해보면 그건 메서드가 정말 많았지! 콘솔은 어떨지 직접 실행해보자

console.warn('UH OH, WARNING!');
console.error('으악 외계인에게 침략당했다!👽');

alert('HELLO👋 WELCOME👻');
let userId = prompt('Please enter your Id');

let userPassword = prompt('Please enter your Password');
if(userPassword === null) {
  console.error('로그인에 실패했습니다.');
} else {
  console.log(`${userId}님, 안녕하세요. 로그인되었습니다.👏`);
}


// parseInt() 메서드는 문자열을 숫자로 변경시켜줌.
console.log(parseInt('3'));   // 3