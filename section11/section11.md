Template
===
* ui개발에서 중요한작업
* JSON으로 응답을 받고 javascript 로 변환한 후 조작을 한 후 dom에 추가.
* 데이터 + html문자열의 결합이 필요하기 때문.
```js
const data =[
    {
        name : 'kim',
        age : 24,
        address : ['korea','seoul']
    },
    {
        name : 'lee',
        age : 25
    }
]

const template = `<div>welcome #{data[0].name} !! </div>`
                
console.log(template)
```
* tagged template literals
```js
function fn(tages,name,items){
    if(typeof items === "undefined"){
        items = '주문가능한 상품이 없습니다.';
    }
    return (tages[0]+name+tages[1]+items+tages[2]);
}
let template = fn`<div>welcome ${data[0].name} !! </div><h2>주문가능한 항목</h2><div>${data[0].items</div>`;

data.forEach((v)=>{
    let templater = fn`<div>welcome ${v.name} !! </div><h2>주문가능한 항목</h2><div>${v.items</div>` 
});
console.log(template);
```