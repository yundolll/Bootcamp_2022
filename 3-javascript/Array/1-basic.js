// Array(배열)
// 1. 배열은 값의 집합이다. 
// 2. 배열은 값에 순서가 있는 집합이다.

// To make an empty array
let students = [];

//An array of strings
// let colors = ['red','orange','yellow'];

//An array of numbers
let lottoNums = [19,22,45,12,34];

//A mixed array
let stuff = [true,68,'dog',null];

console.log(students.length); // 0
console.log(lottoNums.length);  // 5



// 배열 임의 접근

// 배열은 각 요소에 인덱스가 부여되어 있음.
console.log(stuff[2]);  // dog
console.log(stuff[2].length);  // 3


// Modifying Arrays 

let colors = ['rad','orange','green','yalloww'];

colors[0] = 'red';
console.log(colors);

colors[3] = 'yellow';
console.log(colors);

colors[10] = 'Indigo';
console.log(colors);  // ['red', 'orange', 'green', 'yellow', empty × 6, 'Indigo']
console.log(colors.length); // 11



let beatles = ['paul','john','george'];

beatles[3] = 'ringo';
console.log(beatles); // (4) ['paul', 'john', 'george', 'ringo']