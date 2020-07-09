Destructuring
===
* 디스트럭쳐링 은 구조분해할당입니다. 배열이나 객체의 속성을 해체하여 그 값을 개별변수에 담을 수 있게 해줍니다.

### Array
* 배열의 경우는 필요한 값을 변수에 저장시켜주기 위해서는 인덱스순으로 선언하기 위한 변수명을 배열의 인덱스 순대로 넣어줍니다.
* 그러므로 0번째와 2번째 값이 필요할경우에는 0번째값과 2번째 지정하려는 변수 사이에 공백으로 구별해줄 필요가 있습니다.
* 변수 선언을 초기에 하고 할당을 하고 진행을 하여도 값의 할당에 문제는 없습니다.
* 변수를 n개 넣고 리터럴을 n개 미만을 넣어줄 경우 남은 부분은 undefined가 입력됩니다.(test1)
    * 만약 값을 넣어줄때 변수를 넣는 과정을 함께 진행한다면 남은부분에는 넣은 값이 저장되어집니다.
* 변수 n개를 넣고 리터럴은 m개 초과를 넣어줄 경우 ...을 이용하면 나머지 배열을 모두 넣을 수 있습니다.
    * 나머지 요소 뒤에 새로운 쉼표가 있으면 문법오류가 발생합니다.(test3)
* 배열형태의 값을 원하는 위치로 변경해줄수 있습니다.(test2)
    * 해당 형태를 이용하면 인덱스를 원하는 위치에 변경하여 줄 수 있습니다.

```js
let data=['kim','lee','jeong','park'];
let var1= data[0];
let var2= data[2];

let [kim,,jeong] = data;
console.log(kim,jeong)
```
---
### Object
* 변수명을 다른이름으로 지정이가능합니다.
* 배열과 마찬가지로 선언된 변수 이하로 선언할경우 undefined가 선언되어집니다.
* 기새로운 변수명에 할당과 기본값을 한번에 할 수 있습니다.(test1)
* 함수 매개변수로 활용할때 값 설정하기입니다.
    * es5,es2015 두가지가 존재합니다.(test2,test3)
    * es2015버전을 보면 매개변수를 넣어주면 매칭시켜 값을 넣어주는 것을 확인할 수 있습니다.
* for of를 이용하여 구조를 분해 할 수 있습니다(test4)

```js
let obj ={
    name : 'kim',
    age : '30',
    address : 'korea'
}

let{name,age} = obj;
console.log(name,age);

let {name:myName , age:myAge}=obj;
console.log(myName,myAge)
```
---
### JSON parsing
*
```js
var data = [
    {
        a : 'hello',
        b : 'hello!!!!!',
        c : 'hi'
    },
    {
        a : 'bye',
        b : 'bye!!!!!!!!',
        c : 'see you'
    }
]

let [,bye] = data
console.log(bye) // bye가 위치한 객체를 출력
let {b,c,} = bye
console.log(a,b) // bye , bye!!!!!!!

let [,{a,c}] = data
console.log(a,c) ///bye,see you
```
---
### Event
```js
var data = [
    {
        a : 'hello',
        b : 'hello!!!!!',
        c : 'hi'
    },
    {
        a : 'bye',
        b : 'bye!!!!!!!!',
        c : 'see you'
    }
]

function getData([,{c}]){
    console.log(c);
}

getData(data);
```
```html
<!DOCTYPE html>
<head></head>
<body>
    <div>hello javascript ~</div>
</body>
```
```js
document.querySelector('div').addEventLister('click',function({target}){
    console.log(target); == console.log(e.target);
})
```