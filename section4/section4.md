Array
===
### for-of
* for-of문을 쓰면 배열 내부의 값들을 출력해줍니다.
* for-in의 문제인 상위객체까지 영향을 받지 않습니다.
```
let data= ["a", "b", "c", "d", "e", "f", "g"]
data.prototype.getIndex = function(){};
for(let value of data){
    console.log(value); //a,b,c,d,e,f,g
}
```
* 객체뿐만 아니라 스트링에서도 사용이 가능합니다.
let data = 'abcdefg'
for(let value of data){
    console.log(value) //a,b,c,d,e,f,g
}

### for-in
* index를 출력합니다
* 문제점 : 프로토타입으로 추가된 상위에 객체까지 영향을 받아서 오류가 발생할 수 있습니다.
```
let data= ["a", "b", "c", "d", "e", "f", "g"]
for(let i in data){
    console.log(i)//인덱스를 출력합니다.
}
data.prototype.getIndex = function(){};
for(let i in data){
    console.log(i)//data의 인덱스뿐만 아니라 function()까지 출력을 합니다.
}
```
---

### spread operator(펼침연산자)
```
let pre = ['apple','orange',100];
let newData = [...pre];
console.log(Boolean(pre,newData)) //true
console.log(pre === newData) //false
```
* pre,newData 는 배열을 값만 복사하여 사용하는 것이지 참조값은 동일하지 않습니다.
* 참조하는 값이 다르므로 newData에 값의 변화가 생겨도 pre에는 영향을 주지 않습니다. 이는 반대도 동일합니다.
```
let pre = [100,200,'hello',null];

let newData =[0,1,2,3,...pre,4] // (9) [0, 1, 2, 3, 100, 200, "hello", null, 4]
```
* 기존에 존재하는 배열을 다른 배열에 삽입할때 원하는 위치에 삽입하여 처리할 수 있습니다.
* 삽입한 pre값이 변경이 되더라도 newData에는 영향을 주지 않습니다.
```
pre = [100,200,300];
function sum(a,b,c){
    return a+b+c;
}
let result1 = sum(pre[0],pre[1],pre[2])
let result2 = sum.apply(null,pre);
let result3 = sum(...pre);
result1 === result2 //true
result2 === result3 //true
``` 
* 배열에 3개의 파라미터를 받아 수식한값을 반환해주는 함수에서 기존에는 각각 배열의 인자별로 넣어주었습니다.
* 배열의 바꾸지 않고 복사할 수 있는 방식을 제공합니다.
* 배열을 합치거나 펼쳐서 새로운 파라미터로 전달해주기 위해 사용합니다.
#### call,apply
##### 인프런에 없는 내용 추가
* call,apply,bind는 함수 프로퍼티 메서드 입니다.
* 부모로부터 자식에게 값을 물려주기위하여 사용하는 메서드들입니다.
* call : 이미 할당 되어있는 다른 객체의 함수/메소드를 호출할때 해당 객체에 재할당될때 사용됩니다.
```
function.call(thisArg[, arg1[, arg2[, ...]]])
```
```js
let name ={
    name:'kim',
    callName : function(){console.log(this.name)}
}
let name2 ={
    name : 'lee'
}
console.log(name.callName()) //'kim'
console.log(name.callName.call(name2))//'lee'
```
name이 선언되어질때 callName()에는 이미 내부에 있는 kim이 선언되어 있지만 값을 변경하고 싶은 경우에는 이런 방식으로 사용할 수 있습니다.
* apply : apply는 call과 매우 유사합니다.
* 함수에서 파라미터에 인수가 여러개일 경우 배열을 집어넣고 싶을때 사용합니다.
```
function.apply(thisArg, [argsArray])
```
```js
let nameList =['kim','lee','park'];

function sayNames(a,b,c){
    console.log(a,b,c)
}

console.log(sayNames.apply(null,nameList))//kim lee park
```
* 배열에 배열의 요소만 붙이고 싶을때도 간편하게 사용하실 수 있습니다.
```
let arr1 = [1,2,3];
let arr2 = [4,5,6]
arr1.push.apply(arr1,arr2); //[1,2,3,4,5,6]
```


---
### from method
```js
function addMark1(){
    let newData =[];

    for(let i=0;i<arguments.length;i++){
        newData.push(arguments[i] + "!");
    }
    console.log(newData)
}
function addMark2(){
    let newArray = Array.from(arguments);//arguments는 배열이 아닙니다. 모양만 배열입니다. 값을 배열로 변환해주어야 합니다.
    let newData = newArray.map(function(value){ 
        return value + '!'
    })
    console.log(newData)
}


addMark(1,2,3,4,5);
addMark2(1,2,3,4,5);
```
* 가변적인 파라미터가 들어올때 사용됩니다.
* arguments는 배열이 아닙니다. object타입으로 값이 지정이 되지만 따로 배열로 변환해주어야 합니다.