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
#### call,apply
##### 인프런에 없는 내용 추가
* 
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
* 함수.apply()
---
### from method
function addMart(){

}

