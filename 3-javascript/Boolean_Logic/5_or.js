// only one side needs to be true!

// || (OR)
// 한쪽만 참이어도 문장 전체가 참이 됨
1 !== 1 || 10 === 10;   // true
10 / 2 === 5 || null;   // true
0 || undefined;     // false


// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free

const age = 101;
if(typeof age === 'number' && age <= 110) {
  if(age >= 0 && age < 5 || age >= 65) {
    console.log('FREE');
  } else if(age >= 5 && age < 10) {
    console.log('$10');
  } else if(age >= 10 && age < 65) {
    console.log('$20');
  } else {
    console.warn('양수만 입력하시오.');
  }
} else {
  console.log('올바른 숫자를 입력해라');
}

// && 연산자는 || 연산자보다 우선순위가 높다.