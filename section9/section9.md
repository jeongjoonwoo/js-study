Map & WeakMap
===
### Map
* map은 key,value구조. 어떤 객체를 저장하는것이 아니라 객체에대한 부연적이 설명, 추가적인정보,자식을 저장할때 유용합니다.
* key값에 객체가 저장되어집니다.
### weakMap
```js
let wm = new WeakMap();
let fun1 = function(){};

wm.set(fun1,0);

console.log(wm)
let count=0
for(let i=0;i<=9;i++){
    count = wm.get(fun1);
    count += 1;
    wm.set(fun1,count);
}

console.log(wm);
console.log(wm.get(fun1));
fun1 = null;
console.log(wm.get(fun1));
console.log(wm.has(fun1));
```
* object타입을 중복없이 사용하고 싶을떄 유용하게 사용할 수 있습니다.
---
### WeakMap활용
```js
// function Area(height,width){
//     this.height = height;
//     this.width = width;
//}
const wm = new WeakMap()
//private function
function Area(height,width){
    // wm.set(this,{height,width});
    let obj = {};
    obj.height = height;
    obj.width = width
}

// Area.prototype.getArea=function(){
//     return this.width * this.height
// }
Area.prototype.getArea=function(){
    // const {height,width} = wm.get(this);
    const {height,width} = wm.get(obj);
    return height * width;  
}


let myarea = new Area(10,20);
console.log(myarea.getArea());
myarea=null;
console.log(wm.has(myarea)) //true
console.log(wm); // 값은 보입니다.
console.log(wm.has(myarea)) //false
```