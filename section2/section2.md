Scope
===
### let
```
var name = 'global var';
function home(){
    var homevar = 'homevar';
    for(var i=0;i<100;i++){
    }
    console.log(i)
}
home()//100
```
* scope-chain : es6이전에는 함수단위로 스코프를 잡고 없으면 전역으로 찾아서 사용합니다.
```
var name = 'global var';
function home(){
    var homevar = 'homevar';
    for(let i=0;i<100;i++){
    }
    console.log(i)//undefined
}
home()
```
* i는 for문에서만 사용가능한 값입니다. 범위가 블록단위로 제한이 되어서 외부에서는 접근할 수 없습니다.
---
### let과closure
* 콜백 함수는 콜백할때마다 밖에있는 변수갚을 참조하면서 출력이 됩니다.
* var을 사용하면 콜백할때마다 콜백 밖에있는 i값을 계속 참조를 유지하면서 출력이 됩니다. i값을 4개의 이벤트 모두 공유합니다.
* let을 사용하면 블록 스코프가 존재하고 콜백함수를 선언하면서 콜백함수에 지역함수 시킨것과 동일합니다.
---
### const
* const는 변수를 선언할때 값의 let의 기능에 재할당을 금지합니다.
* 상수개념으로 많이 사용합니다.
* 재할당을 금지합니다.
* const를 기본으로 사용한다. => 변경이 필요한 변수는 let을 사용한다. => var은 사용하지 않는다
* let은 블로스코프만을 위해서 사용하는것은 아닙니다.
```
function home(){
    const list=['apple','orange','watermelon'];
    list = 'aaaa'//type 오류가 발생합니다.
    list.push('banana') //오류가 발생하지 않고 banana가 추가됩니다.
}
```
* const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능합니다.
* immutable array를 만드는법
```
const list1=['apple','orange','watermelon'];
list2= [].concat(list,'banana');
console.log(list1,list2) //['apple','orange','watermelon'],['apple','orange','watermelon','banana']
```
* 두개의 배열은 다른 배열입니다.
* 기존 리스트를 보관한 상태로 list2에 추가시켜 주어서 list1은 보존될 수 있습니다.

