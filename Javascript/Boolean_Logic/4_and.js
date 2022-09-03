// 논리 함수 AND
// &&
1 <= 4 && 'a' === 'a';  // true
9 > 10 && 0 >= 9;   // false
'abc'.length === 3 && 1 + 1 === 4;  // false

// 이 문장 전체가 참이 되려면 왼쪽과 오른쪽이 다 참이어야 함

let password = prompt('Enter your password');


if(password.length >= 5 && password.indexOf(' ') === -1) {
  console.log("VALID PASSWORD!");
} else {
  console.log("INCORRECT FORMAT FOR PASSWORD!");
}


/*
  password의 길이가 5 이상이면 true,
  password 문자열중 공백이 포함되어 있으면 -1
  indexOf 메서드로 문자열에 없는걸 찾으면 -1이 뜸
*/




// Quiz

//CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE
const mystery = 'P777777'; 


// LEAVE THIS CODE ALONE! (pretty please)
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}

/*
  mystery변수의 첫글자는 P, 
  mystery변수의 길이는 6 이상,
  mystery변수에 7이라는 문자열이 들어가있냐 ? 

  !== 는 피연산자가 같지 않거나 타입이 같지 않으면 true
*/