// NOT 논리 연산자

!null // true
! (0 === 0) // false
!(3 <= 5) // false

// let firstName = prompt('Enter your first name');

// if(!firstName) {
//   firstName = prompt('Try again');
// }



// prompt에 아무것도 입력하지 않으면 변수엔 null이 저장됨.
// prompt에 아무것도 입력하지 않은채 확인을 누르면 변수에 빈 string('')이 저장됨


const age = 1;


/* 
나이가 0이상, 5이하 이거나 
나이가 65 이상인 사람들을 제외 
*/
// NOT 연산자(!)를 넣으면 긴 문장 전체가 부정됨.

if (!(age >= 0 && age < 5 || age >= 65)) {
  console.log('YOU ARE NOT A BABY OR A SENIOR! NOT FREE');
} else {
  console.log('YOU ARE A BABY OR SENIOR')
}



// 연산자 연습

1 <= 4 && 'a' === 'a';  // true

9 > 10 && 9 >= 9;   // false

'abc'.length === 3 && 1+1 === 4;  // false