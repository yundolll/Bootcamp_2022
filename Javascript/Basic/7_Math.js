// MATH OBJECT 👩‍💻

// 수학과 관련된 특성과 메서드의 모음

Math.PI;

const pi = Math.PI;
console.log(pi);

// 반올림 메서드 
Math.round();

Math.round(5.4);  // 5
Math.round(5.5);  // 6



// 제곱 구하기
Math.pow();

Math.pow(2,3);  // 2의 3제곱 -> 8


// 절대적 값
Math.abs();

Math.abs(-3); // 3
Math.abs(-124); // 124



// 내림 
Math.floor();

Math.floor(5.5);  // 5
Math.floor(5.7);  // 5



// 올림
Math.ceil();

Math.ceil(4.2); // 5
Math.ceil(2.3); // 3




// 난수 구하기
Math.random();

console.log(Math.floor(Math.random() * 6) + 1);