로또번호 만들기
===
* destructuring and set 활용
    1. 유일한 값을 추출하는 과정에서 Set를 사용합니다.
    2. getRandomNumber함수에 변수를 전달하는 과정에서 destructuring을 사용합니다.
```js
const name = "LUCKY LOTTO!",
    count = 6,
    maxNumber = 45;

const colorSet = new Set()


function getRandomNumber(maxNumber){
    colorSet.add(parseInt(Math.random() * maxNumber));
}

for(let i=0; i< count ; i++){
    getRandomNumber(maxNumber);
}
console.log(colorSet.values());
```