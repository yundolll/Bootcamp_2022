// ARRAY METHODS

// push - add to end
// pop - remove from end
// shift - remove from start
// unshift - add to start


// push와 pop은 끝에 작용하고, shift와 unshift는 시작에 작용

let movieLine = ['tom','nancy'];
movieLine.push('jax');
movieLine.push('pablo');
movieLine.push('oliver');

console.log(movieLine);
// ['tom', 'nancy', 'jax', 'pablo', 'oliver']

movieLine.pop();  
console.log(movieLine);
// ['tom', 'nancy', 'jax', 'pablo']


// unshift 🧦
let person = ['harry','potter','yun','ji'];
person.unshift('you','hoo');
console.log(person);
// (6) ['you', 'hoo', 'harry', 'potter', 'yun', 'ji']



// shift 🧦
person.shift();
console.log(person);
// (5) ['hoo', 'harry', 'potter', 'yun', 'ji']




// concat (접합) 🧦
// EX)
const array1 = ['a','b','c'];
const array2 = ['d','e','f'];
const array3 = array1.concat(array2);
console.log(array3);  // (6) ['a', 'b', 'c', 'd', 'e', 'f']


// includes  🧦
// - 배열에 특정 값이 포함되어 있는지 알려줌 (불리언 값으로 반환됨)
const lottoNum = [1,2,3,4,5,6];

console.log(lottoNum.includes(4));  // true
console.log(lottoNum.includes(7));  // false

let result = lottoNum.includes(4);
console.log(result); // true


// indexOf 🧦
// 인자로 받은 값의 인덱스값을 반환
// 인자로 받은 값이 배열 안에 요소와 일치하는게 없으면 -1을 반환

let dd = [2,3,5,4,3,34,];

console.log(dd.indexOf(34));  // 5
console.log(dd.indexOf('d'));   // -1




// reverse 🧦
// 배열을 뒤집어버림. 원본 배열에도 영향이 바로 끼침 (파괴메서드라고 불림)

let fruit = ['사과','바나나','포도'];
fruit.reverse();
console.log(fruit); // (3) ['포도', '바나나', '사과']




// slice - copies a portion on an array 🧦
// 배열의 일부를 복사하는 방법

const ex1 = [1,2,3,4,5,6,7];

console.log(ex1.slice(1));  // (6) [2, 3, 4, 5, 6, 7]
console.log(ex1.slice(2));  // (5) [3, 4, 5, 6, 7]
console.log(ex1.slice(1,3));  // (2) [2, 3]
console.log(ex1.slice(1,20)); // (6) [2, 3, 4, 5, 6, 7]
console.log(ex1.slice(1,-2)); // (4) [2, 3, 4, 5]

console.log(ex1); // 원본 배열에 지장이 없음

const copyEx = ex1.slice(0,3);
console.log(copyEx);  // [1, 2, 3]


// splice - removes / replaces elements 🧦
// splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 
//새 요소를 추가하여 배열의 내용을 변경합니다.


// 원본 배열에 지장이 있음
const ex2 = [1,2,3,4,5,6,7];

ex2.splice(3); // (4) [4, 5, 6, 7]
console.log(ex2); // (3) [1, 2, 3]

ex2.splice(0,0,'hello');
// 1. 몇번째 인자에서? 2. 얼마나 삭제? 3. 뭘 넣을거야?
console.log(ex2); // (4) ['hello', 1, 2, 3]

// 연습해보기

const color = ['red','orange','yellow','green','blue'];
console.log(color.indexOf('blue'));

console.log(color); // (5) ['red', 'orange', 'yellow', 'green', 'blue']
color.splice(5,0,'purple');
console.log(color); 
// (6) ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
// 근데 이 예제에서는 push를 사용하는게 낫지 않을까 ?

const color2 = ['red','orrange','yeelllow','green','bluee'];
// color2.splice(1,1,'orange');
// console.log(color2);

// color2.splice(2,1,'yellow');
// console.log(color2);

// color2.splice(4,1,'blue');
// console.log(color2);

color2.splice(1,2,'orange','yellow'); // 이렇게 문자열 두개전달도 가능
console.log(color2);
// (5) ['red', 'orange', 'yellow', 'green', 'bluee']

// bluee 삭제해보기
color2.splice(4,1);
console.log(color2);  // ['red', 'orange', 'yellow', 'green']



// 사실상 splice는 그렇게 효율적인 방법은 아님. 가능하면 배열 맨 끝을
// 업데이트 하는게 나음.



// sort 🧦 
// sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. 
// 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.

// 실무에서 자주 사용

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const arr1 = [1, 30, 4, 21, 100000];
arr1.sort();
console.log(arr1);
// expected output: Array [1, 100000, 21, 30, 4]


const scores = [1,70,100,2500, 9, -12];
// scores.sort();
// console.log(scores);  // [-12, 1, 100, 2500, 70, 9]

function example(num) {
  if( num < 1) {
    return 1;
  } 
  if( num > 1 ) {
    return -1;
  }
  return 0;
}

scores.sort(example);
console.log(scores);


const exam1 = [1,2,'hi'];
console.log(exam1.toString());
console.log(exam1);
console.log(typeof exam1);  // object



// 배열에서의 삼중 등호 연산자와 이중 등호 연산자의 역할

['hi','bye'] === ['hi','bye']; // false
[1] === [1]; // false
[1] == [1]; // false
[] == []; // false

// javascript는 배열 안에 있는 것에는 관심이 없음.
// 실제로 비교하는 건 메모리에서 참조되는 값임

let nums = [1,2,3];
let numsCopy = nums;
console.log(nums === numsCopy); // true

nums[2] = 'new number';
console.log(nums);  // [1, 2, 'new number']
console.log(numsCopy);  // [1, 2, 'new number']

// nums와 numsCopy변수는 메모리에서 같은 것을 참조하고 있음.
// 즉, nums와 numsCopy변수는 서로 연결되어 있음.

numsCopy.pop();
console.log(numsCopy);  // [1,2]
console.log(nums);  // [1,2]

// javascript에서 배열을 비교하려면 둘이 같은 참조를 따르는 배열인지 확인하기



// 배열 + const
// const로 배열을 저장해도 변수 자체가 재할당되지 않음
const number = [1,2,3];
// 이때 저장한건 콘텐츠가 아닌, '참조'임
// 이 배열의 참조인 주소는 아무런 영향을 받지 않음
// number의 화살표가 가리키는 건 이 배열임

number.push(4);
console.log(number);  // [1, 2, 3, 4]

// number = 5;
// Uncaught TypeError: Assignment to constant variable. 에러뜸

// number = [1,2,3] 이것도 에러뜸
// 자바스크립트 눈에는 다른 배열로 보임




// 다차원 배열 ( NESTED ARRAYS )
const gameBoard = [
  ['O', null, 'X'],
  [null, 'X', 'O'],
  ['X', 'O', null]
];

console.log(gameBoard); // (3) [Array(3), Array(3), Array(3)]

// 첫번째 배열의 null에 접근하는 방법
console.log(gameBoard[0][1]); // null