// String Methods π¦
// λͺ¨λ  λ¬Έμμ΄μ μ€μ§μ μΌλ‘ μ΄λ€ λμμ λ΄ν¬νκ³  μμ

//νΉμ  λ¬Έμμ΄μ μ¬μ©ν΄ μνν  μ μλ λμμ 'λ©μλ' λΌκ³  λΆλ¦
// λ©μλλ ν¬μΌλͺ¬μ νΉμκΈ°μ κ³Ό λΉμ·

// μ¬μ©λ² π thing.method()



let msg = 'I am king';
let yellMsg = msg.toUpperCase();  // 'I AM KING'
// toUpperCase()λ©μλλ ν λ¬Έμμ΄μ μ λΆ λλ¬Έμλ‘ λ°κΏμ€
// μλ κ°μ κ±΄λλ¦¬μ§ μμμ msgμ κ°μ κ·Έλλ‘μ



let lol = 'LOLOLOLOL';
console.log(lol.toLowerCase()); // lolololol
// toLowerCase()λ©μλλ ν λ¬Έμμ΄μ μ λΆ μλ¬Έμλ‘ λ°κΏμ€


let greeting = '       leave me alone plz        ';
greeting.trim();
console.log(greeting);
console.log(greeting.trim());
//trim() λ©μλλ λ¬Έμμ΄μ μ²μκ³Ό λμ μ€λ κ³΅λ°±μ μ λΆ κΉμλ
// μλ κ°μ κ±΄λλ¦¬μ§ μμμ greeting μ κ°μ κ·Έλλ‘μ

let userInput = '      hello my name is tim tom tammy ping pong';
console.log(userInput.trim());

console.log('   kalsjda   '.trim());



// λ©μλλ μ°λ¬μμ μ¬μ©μ΄ κ°λ₯νλ€!!π¨
console.log(' hello again! !!!!   '.trim().toUpperCase());
//HELLO AGAIN! !!!!




// μΈμκ° μλ λ¬Έμμ΄ κ·μΉ β
// μμλ μΈμκ° μλ λ©μλμ΄κ³ , λ§μ λ©μλλ μΈμλΌλ κ±Έ λ°μ

// μΈμλ, λ©μλλ‘ μ λ¬λμ΄μ λ©μλμ λμμ λ³κ²½νλ μλ ₯κ°.

let tvShow = 'catdog';

// πindexof
console.log(tvShow.indexOf('cat')); // 0
console.log(tvShow.indexOf('dog')); // 3
console.log(tvShow.indexOf('z')); // -1
// λ¬Έμμ΄μ μλκ±Έ μ°ΎμΌλ©΄ -1μ΄ λΈ

console.log('haha that is so funny!'.indexOf('!'));   // 21
console.log('haha that is so funny!'.indexOf(' '));   // 4



// πslice
console.log('haha that is so funny!'.slice(5)); // that is so funny!
console.log('haha that is so funny!'.slice(0,4)); // haha

let msg2 = 'haha that is so funny!';
msg2.slice(5);
console.log(msg2);  // λ³μμ κ°μ κ·Έλλ‘μ. μ§μ₯ X

console.log(msg2.slice(1,3)); // ah
console.log(msg2.slice(5,9)); // that
console.log(msg2.slice(10,13)); // that

console.log(msg2.slice(-1));  // !
console.log(msg2.slice(-3));  // ny!
// μμλ₯Ό μΈμλ‘ μ λ¬νλ©΄ λ¬Έμμ΄κΈΈμ΄μ λ§μ§λ§λΆν° !


// πreplace
// μ μΌ μ²«λ²μ§Έ κΈμμλ§ μ μ©λ¨
console.log(msg2.replace('haha','lol~'));
console.log(msg2);  // μλ κ°μλ μ§μ₯μ΄ μμ.
console.log(msg2.replace('h','H'));

console.log(msg2.replaceAll('h','H'));



// πrepeat
console.log('hello'.repeat(5)); // 5λ°° λ°λ³΅μν΄



// ννλ¦Ώ λ¦¬ν°λ΄ π¦
// λ¬Έμμ΄ μμ ννμμ λ΄μ₯ν  μ μλ λ¬Έμμ΄λ€μ λ§λ€κ³  ν΄λΉ ννμμ
// νκ°λ νμ λ¬Έμμ΄λ‘ λ°λ

let product = 'Artichoke';
let price = 2.25;

let qty = 5;

let msg3 = `You bought ${qty} ${product}s Total is: $${price * qty}`
// qtyμ priceκ° νκ°λ ν λ¬Έμμ΄λ‘ κ΅μ²΄λ¨
// typeof msg3 μ 'string'
console.log(msg3);