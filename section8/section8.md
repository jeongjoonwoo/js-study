Set & WeakSet
===
### set 
* 중복없이 유일한 값을 저장하려고 할때. 이미 존재하는지 체크할때 유용합니다.
* 중복된 값을 계속적으로 추가하여도 추가 되지않고 해당값은 1개만 남아있습니다.
* set.add('string') , set.has('string') , set.delete('string')
```js
let mySet = new Set();
console.log(toString.call(mySet)) //[object set]
```
===
### weak set
* 참조를 가지고 있는 객체만 저장이 가능합니다.
```js
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj1 = {arr1,arr2};

let ws = new WeakSet();

ws.add(arr1);
ws.add(arr2);
ws.add(obj1);

//string,number 모두 집어넣지 못합니다.
console.log(ws); //WeakSet {{…}, Array(4), Array(4)}

arr1=null;

console.log(ws); //WeakSet {{…}, Array(4), Array(4)}
console.log(ws.has(arr1)) false
```
* 값이 널이나 없어지면 해당값을 가비지 컬렉션이 자동으로 실행하여 값이 없어집니다.
* 객체형태를 중복없이 저장하려고할때 유용합니다.