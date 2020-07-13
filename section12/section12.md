function
===
* arrow function
    * function을 치는 시간의 불편함을 줄이기 위하여 사용되었습니다.
    * function(parameter) = (parameter) => 로 간편하게 사용할 수 있습니다.
    * arrow 뒤의 값을 콜백함수라고 인식합니다.

```js
setTimeout(function(){
    console.log('settimeout');
},1000);

setTimeout(()=>{
    console.log('settimeout arrow');
},1000);

let newArr = [1,2,3,4,5].map(function(v,i,o){
    return value * 2;
})

newArr = [1,2,3,4,5].map((v,i,o)=>{
    return value * 2;
})

newArr = [1,2,3,4,5].map((v)=> v * 2);
```
---
* this context
    * arrow없이 바인드 된거처럼 사용할 수 있습니다.
    * 일반 사용할 경우에는 this는 window를 지목하고 있습니다. this가 지목되어진 부분에 arrow를 사용하게 되면 this가 이벤트 큐에 있다가 나중에 실행하게되어 해당 부분에서 this를 지목하게 됩니다. 
```js
const myObj = {
    reunTimeout(){
        setTimeout(function(){
            console.log(this===window);
            this.printData().bind(this); // 오류발생 this가 지목하는것은 윈도우라 안됌.
        },200);
    },
    printData(){
        console.log('hi');
    }
} 
```
```js
 const myObj = {
    reunTimeout(){
        setTimeout(()=>{
            console.log(this===window);//this가 event queue에 있다가 나중에 실행되어집니다.
            this.printData() //
        },200);
    },
    printData(){
        console.log('hi');
    }
} 
```

```js
const el = document.querySelector('el');

const myObj ={
    register(){
        el.addEventListener('click',(evt)=>{
            this.printData(evt.target); //선언되어진 부분에서 this가 가리킵니다.
        });
    },
    printData(el){
        console.log('click',el.innerText);
    }
}

myObj.register();
```
---
* function default parameters
    * 파라미터 부분에서 default값을 설정할 수 있습니다.
    * 해당파라미터 값이 입력되지 않으면 디폴트 값을 이용합니다.
    * 이것은 객체값도 문제없이 사용이 가능합니다.
```js
function sum(value,size){
    return value * size;
}

console.log(sum(3,10));
```
---
* rest parameters
    * spread operator 과 유사합니다.
    * arguments는 단순하게 console.log라고 작성을하면 배열이 라고 적혀있지만 dir로 체크를하면 object arguments로 출력이 되어있습니다.
    * 매개변수에 점이 들어가면 배열로 받습니다.
```js
function checkNum(){
    const arg = Array.prototype.slice.call(arguments);
    arg.every((v)=>typeof v ==='number')
}

function checkNum(...arg){
    arg.every((v)=>typeof v ==='number')
}
const result = checkNum(10,2,3,4,5,"123");
```