// String ๐ฆ
let msg = 'Please do not feed the chimps!';
let bad = 'this is wrong';

//๋ฌธ์์ด์ ๋ ํ๋์ ์์ ํ์. 


//๋ฌธ์์ด ์์ ๋ชจ๋  ๋ฌธ์๋ ๊ด๋ จ๋ ์ซ์์ ์์ํจ
// JS์์  ๋ฌธ์์ด๋ง ์ธ๋ฑ์ฑ๋๋ ๊ฑด ์๋๊ณ  ๋ฐฐ์ด๋ ์ธ๋ฑ์ฑ ๋จ


//๐
let animal = 'Dumbo Octopus';
console.log(animal[0]);   // D
console.log(animal[1]);   // u

console.log(animal.length);   // 13
console.log(animal[12]);  // s

let phone = '(231)345-6789';
console.log(phone[0]);


let hello = 'hello';
console.log(hello.length);
//lenghtํน์ฑ์ ์ด ๋ฌธ์ ์๋ฅผ ๋ํ๋.
console.log(hello[4]);


console.log('lol!'+ 'lol');

let firstName = 'Seo';
let lastName = 'Yunji';

console.log(firstName + ' ' + lastName);
console.log(firstName);

//๋ฌธ์์ด์ ๋ณ๊ฒฝ์ํฌ ์ ์์.
//์ด ๋ง์ ์ฆ, ๋ฌธ์์ด ๊ฐ์ ์๋ฐ์ดํธ์ํฌ ์ ์๋ค๋ ๋ป
//๋ฐ๊พธ๊ณ  ์ถ๋ค๋ฉด, ์ ๋ฌธ์์ด์ ๋ฎ์ด ์จ์ ์ ๊ฐ์ ์ค์ผ ํจ

let fullName = firstName + ' ' + lastName;
console.log(fullName);

let result = 1 + 'hi';
console.log(result);  // '1hi'
console.log(typeof result); // string 