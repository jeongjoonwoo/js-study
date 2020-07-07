String
===
* string의 새로운 메서드들
```
let str = "hello world ! ^^ ~~ "
let matchstr ="hello"
console.log(str.starsWith(matchstr))//true

let matchstr2 ='^~~';
console.log(str.endsWith(matchstr2))//false

let matchstr3 ='^ ~~';
console.log(str.endsWith(matchstr3))//true

let matchstr4 ='world'
console.log(str.includes(matchstr4))//true
```
* startsWith 는 시작부터 진행합니다 공백 여부도 확인한후 처음부터 길이만큼 일치한가 아닌가를 확인해줍니다.
* endsWith는 끝부터 진행합니다 마찬가지로 공백여부도 확인하도 뒤에서부터 길이만큼 일치한가 아닌가를 확인해줍니다.
* includes는 검사하려는 스트링내부에 똑같이 일치하는 글자가 있냐 확인해줍니다
* 공백여부도 확인합니다.
