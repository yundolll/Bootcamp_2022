// JS Objects ๐คก

// ๋ฐฐ์ด์ฒ๋ผ ๊ฐ์ฒด๋ ์ผ์ข์ ๊ตฌ์กฐ์ ์ฌ๋ฌ ๋ฐ์ดํฐ ์กฐ๊ฐ์ ์ ์ฅํ๊ฒ ํด์ค
// ํ๋กํผํฐ๋ผ๋ ๊ฑธ ์ด์ฉํด์ ๋ฐ์ดํฐ๊ฐ ์ ์ฅ๋จ [ํค : ๊ฐ]


// ๊ฐ์ฒด ๋ฆฌํฐ๋ด ๋ง๋ค๊ธฐ
const person = {
  firstName: 'Mick',
  lastName: 'Jagger'
}

console.log(person);  // {firstName: 'Mick', lastName: 'Jagger'}

// ๊ฐ์ฒด๋ฅผ ๋ง๋ค๋ฉด ๊ทธ ์์ ์จ๊ฐ ์ข๋ฅ์ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ผ๋ก ์ ์ฅํ  ์ ์์


let comment = {
  username : 'sillyGoose420',
  downVotes : 19,
  upVotes : 214,
  netScore : 195,
  commentText : 'Tastes like chicken lol',
  tags : ['#hilarious', '#funny', '#silly'],
  isGilded : false
};



//  + ๊ฐ์ฒด์์ ๋ง๋๋ ๋ชจ๋  ํค๋ค์ ๋ฌธ์์ด๋ก ๋ณํ๋จ ( ๋ถ๋ฆฌ์ธ์ด๋  ์ซ์๋  )
const years = {1999: 'GOOD', 2020: 'BAD'};

years['1999'];  // 'GOOD'
years['2020'];  // 'BAD'
years[1999];  // 'GOOD'


const dumbdumb = {true: 'dat', null: 'asdjflsdjfl'};
dumbdumb[true]; // 'dat'
dumbdumb.true;  // 'dat'




// ๊ฐ์ฒด ๋ฐ์ดํฐ ์ก์ธ์คํ๋ ๋ฐฉ๋ฒ

// 1) ๊ดํธ ํ๊ธฐ๋ฒ
person['firstName']; // Mick
comment['commentText']; // 'Tastes like chicken lol'
comment['djfsjfl']; //undefined
// ๊ฐ์ฒด์์ ์๋๊ฑธ ์์ฑํ๋ฉด undefined




// 2) ์  ํ๊ธฐ๋ฒ
person.firstName;   // 'Mick'




// ๊ดํธํ๊ธฐ๋ฒ๊ณผ ์ ํ๊ธฐ๋ฒ์ ์ฐจ์ด์ 
// person[firstName]; <= ์๋ฌ๋ธ
person.firstName; // 'Mick'

person['first'+ 'Name'];  // 'Mick'


let birthYear = 1999;
years.birthYear;  // undefined


years[birthYear]; // GOOD
years['birthYear']; // undefined


// ์ ํ๊ธฐ๋ฒ๋ ์ข์ง๋ง, ๋ณ์๊ฐ์ ์ ๋์ ์ธ ๊ฒ์ ๊ฐ์ฒด์์ ํค๋ก ์ฐ๊ณ ์ถ์ผ๋ฉด ๋๊ดํธ ์ฌ์ฉ