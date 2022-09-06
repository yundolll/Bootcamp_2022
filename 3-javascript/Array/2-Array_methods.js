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

movieLine.pop();  
console.log(movieLine);


// unshift
let person = ['harry','potter','yun','ji'];
person.unshift('you','hoo')
console.log(person);
// (6) ['you', 'hoo', 'harry', 'potter', 'yun', 'ji']



// shift
person.shift();
console.log(person);
// (5) ['hoo', 'harry', 'potter', 'yun', 'ji']




// concat (접합)
// EX)
const array1 = ['a','b','c'];
const array2 = ['d','e','f'];
const array3 = array1.concat(array2);
console.log(array3);  // (6) ['a', 'b', 'c', 'd', 'e', 'f']


// includes 
// - 배열에 특정 값이 포함되어 있는지 알려줌 (불리언 값으로 반환됨)
const lottoNum = [1,2,3,4,5,6];

console.log(lottoNum.includes(4));  // true
console.log(lottoNum.includes(7));  // false

let result = lottoNum.includes(4);
console.log(result);    // true


// indexOf
// 인자로 받은 값의 인덱스값을 반환
// 인자로 받은 값이 배열 안에 요소와 일치하는게 없으면 -1을 반환

let dd = [2,3,5,4,3,34,];

console.log(dd.indexOf(34));  // 5
console.log(dd.indexOf('d'));   // -1




// reverse
// 배열을 뒤집어버림. 원본 배열에도 영향이 바로 끼침 (파과메서드라고 불림)

let reverse = ['사과','바나나','포도'];
reverse.reverse();
console.log(reverse); // (3) ['포도', '바나나', '사과']