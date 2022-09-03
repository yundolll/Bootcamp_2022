// String Methods 🦔
// 모든 문자열은 실질적으로 어떤 동작을 내포하고 있음

//특정 문자열을 사용해 수행할 수 있는 동작을 '메서드' 라고 부름
// 메서드는 포켓몬의 특수기술과 비슷

// 사용법 👉 thing.method()



let msg = 'I am king';
let yellMsg = msg.toUpperCase();  // 'I AM KING'
// toUpperCase()메서드는 한 문자열을 전부 대문자로 바꿔줌
// 원래 값은 건드리지 않아서 msg의 값은 그대로임



let lol = 'LOLOLOLOL';
console.log(lol.toLowerCase()); // lolololol
// toLowerCase()메서드는 한 문자열을 전부 소문자로 바꿔줌


let greeting = '       leave me alone plz        ';
greeting.trim();
console.log(greeting);
console.log(greeting.trim());
//trim() 메서드는 문자열의 처음과 끝에 오는 공백을 전부 깎아냄
// 원래 값은 건드리지 않아서 greeting 의 값은 그대로임

let userInput = '      hello my name is tim tom tammy ping pong';
console.log(userInput.trim());

console.log('   kalsjda   '.trim());



// 메서드는 연달아서 사용이 가능하다!!😨
console.log(' hello again! !!!!   '.trim().toUpperCase());
//HELLO AGAIN! !!!!




// 인수가 있는 문자열 규칙 ✋
// 위에는 인수가 없는 메서드이고, 많은 메서드는 인수라는 걸 받음

// 인수란, 메서드로 전달되어서 메서드의 동작을 변경하는 입력값.

let tvShow = 'catdog';

// 👉indexof
console.log(tvShow.indexOf('cat')); // 0
console.log(tvShow.indexOf('dog')); // 3
console.log(tvShow.indexOf('z')); // -1
// 문자열에 없는걸 찾으면 -1이 뜸

console.log('haha that is so funny!'.indexOf('!'));   // 21
console.log('haha that is so funny!'.indexOf(' '));   // 4



// 👉slice
console.log('haha that is so funny!'.slice(5)); // that is so funny!
console.log('haha that is so funny!'.slice(0,4)); // haha

let msg2 = 'haha that is so funny!';
msg2.slice(5);
console.log(msg2);  // 변수의 값은 그대로임. 지장 X

console.log(msg2.slice(1,3)); // ah
console.log(msg2.slice(5,9)); // that
console.log(msg2.slice(10,13)); // that

console.log(msg2.slice(-1));  // !
console.log(msg2.slice(-3));  // ny!
// 음수를 인자로 전달하면 문자열길이의 마지막부터 !


// 👉replace
// 제일 첫번째 글자에만 적용됨
console.log(msg2.replace('haha','lol~'));
console.log(msg2);  // 원래 값에는 지장이 없음.
console.log(msg2.replace('h','H'));

console.log(msg2.replaceAll('h','H'));



// 👉repeat
console.log('hello'.repeat(5)); // 5배 반복시킴



// 템플릿 리터럴 🦔
// 문자열 안에 표현식을 내장할 수 있는 문자열들을 만들고 해당 표현식은
// 평가된 후에 문자열로 바뀜

let product = 'Artichoke';
let price = 2.25;

let qty = 5;

let msg3 = `You bought ${qty} ${product}s Total is: $${price * qty}`
// qty와 price가 평가된 후 문자열로 교체됨
// typeof msg3 은 'string'
console.log(msg3);