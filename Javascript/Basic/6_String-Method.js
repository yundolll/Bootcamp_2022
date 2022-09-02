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