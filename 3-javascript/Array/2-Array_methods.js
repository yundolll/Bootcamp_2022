// ARRAY METHODS

// push - add to end
// pop - remove from end
// shift - remove from start
// unshift - add to start

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


// push와 pop은 끝에 작용하고, shift와 unshift는 시작에 작용


// Push / Pop / Shift / Unshift Practice
const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:

planets.shift();
planets.push('Saturn');
planets.unshift('Mercury');