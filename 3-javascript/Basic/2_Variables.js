// 변수 👜

let year = 1999;
//변수를 선언할 때는 세미콜론이 꼭 필요함

let hens = 4;
let roosters = 2;

console.log(hens + roosters); // 6

let totalChickens = hens + roosters;

console.log(totalChickens); // 6

hens++;

console.log(hens);  //5
console.log(totalChickens);


//변수 업데이트하기 👩‍💻

let score = 0;

score = score + 5;
console.log(score); // 5

score += 5;
console.log(score); // 10

// score = score + 5 와 score += 5는 같다.

let numLives = 9;
console.log(numLives);  // 9
console.log(numLives--);  // 9
console.log(numLives);  // 8
console.log(--numLives);  // 7
console.log(numLives);  // 7

console.log(++numLives);  // 8 
console.log(numLives++);  // 8
console.log(numLives);  // 9