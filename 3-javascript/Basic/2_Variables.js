// λ³μ π

let year = 1999;
//λ³μλ₯Ό μ μΈν  λλ μΈλ―Έμ½λ‘ μ΄ κΌ­ νμν¨

let hens = 4;
let roosters = 2;

console.log(hens + roosters); // 6

let totalChickens = hens + roosters;

console.log(totalChickens); // 6

hens++;

console.log(hens);  //5
console.log(totalChickens);


//λ³μ μλ°μ΄νΈνκΈ° π©βπ»

let score = 0;

score = score + 5;
console.log(score); // 5

score += 5;
console.log(score); // 10

// score = score + 5 μ score += 5λ κ°λ€.

let numLives = 9;
console.log(numLives);  // 9
console.log(numLives--);  // 9
console.log(numLives);  // 8
console.log(--numLives);  // 7
console.log(numLives);  // 7

console.log(++numLives);  // 8 
console.log(numLives++);  // 8
console.log(numLives);  // 9