// JS Objects 🤡

// 배열처럼 객체도 일종의 구조에 여러 데이터 조각을 저장하게 해줌
// 프로퍼티라는 걸 이용해서 데이터가 저장됨 [키 : 값]


// 객체 리터럴 만들기
const person = {
  firstName: 'Mick',
  lastName: 'Jagger'
}

console.log(person);  // {firstName: 'Mick', lastName: 'Jagger'}

// 객체를 만들면 그 안에 온갖 종류의 데이터를 값으로 저장할 수 있음


let comment = {
  username : 'sillyGoose420',
  downVotes : 19,
  upVotes : 214,
  netScore : 195,
  commentText : 'Tastes like chicken lol',
  tags : ['#hilarious', '#funny', '#silly'],
  isGilded : false
};



//  + 객체에서 만드는 모든 키들은 문자열로 변환됨 ( 불리언이든 숫자든 )
const years = {1999: 'GOOD', 2020: 'BAD'};

years['1999'];  // 'GOOD'
years['2020'];  // 'BAD'
years[1999];  // 'GOOD'


const dumbdumb = {true: 'dat', null: 'asdjflsdjfl'};
dumbdumb[true]; // 'dat'
dumbdumb.true;  // 'dat'




// 객체 데이터 액세스하는 방법

// 1) 괄호 표기법
person['firstName']; // Mick
comment['commentText']; // 'Tastes like chicken lol'
comment['djfsjfl']; //undefined
// 객체에서 없는걸 작성하면 undefined




// 2) 점 표기법
person.firstName;   // 'Mick'




// 괄호표기법과 점표기법의 차이점
// person[firstName]; <= 에러뜸
person.firstName; // 'Mick'

person['first'+ 'Name'];  // 'Mick'


let birthYear = 1999;
years.birthYear;  // undefined


years[birthYear]; // GOOD
years['birthYear']; // undefined


// 점표기법도 좋지만, 변수같은 유동적인 것을 객체에서 키로 쓰고싶으면 대괄호 사용