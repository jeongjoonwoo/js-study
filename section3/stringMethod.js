let str='hello world ! ^^ ~~~~~~';

console.log(str.startsWith('hello world!'))//false
console.log(str.startsWith('hello world !'))//true 공백구별
console.log(str.slice(0,13)=='hello world !'); //true

console.log(str.endsWith('~~~~~'));//true
console.log(str.endsWith('~~~~'));//true
console.log(str.endsWith('^ ~~~~'));//false//항목검사

console.log(str.includes('hello'));//true
console.log(str.includes('ello'));//true
console.log(str.includes('ellow'))//false 공백 구별.
console.log(str.includes('! ^^'));//true