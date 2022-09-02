// String 🦔
let msg = 'Please do not feed the chimps!';
let bad = 'this is wrong';

//문자열은 또 하나의 원시 타입. 


//문자열 안의 모든 문자는 관련되 숫자에 상응함
// JS에선 문자열만 인덱싱되는 건 아니고 배열도 인덱싱 됨


//🐙
let animal = 'Dumbo Octopus';
console.log(animal[0]);   // D
console.log(animal[1]);   // u

console.log(animal.length);   // 13
console.log(animal[12]);  // s

let phone = '(231)345-6789';
console.log(phone[0]);


let hello = 'hello';
console.log(hello.length);
//lenght특성은 총 문자 수를 나타냄.
console.log(hello[4]);


console.log('lol!'+ 'lol');

let firstName = 'Seo';
let lastName = 'Yunji';

console.log(firstName + ' ' + lastName);
console.log(firstName);

//문자열은 변경시킬 수 없음.
//이 말은 즉, 문자열 값을 업데이트시킬 수 없다는 뜻
//바꾸고 싶다면, 새 문자열을 덮어 써서 새 값을 줘야 함

let fullName = firstName + ' ' + lastName;
console.log(fullName);

let result = 1 + 'hi';
console.log(result);  // '1hi'
console.log(typeof result); // string 