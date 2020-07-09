Object
===
* 키와 밸류를 이용하여 만듭니다.
```js
const name ='kim'
const age = 33

const obj={
    name : name,
    age : age
};

console.log(obj);
```
* 함수
```js
function getObj(){
    const name ='kim'
    const getname = function(){
        return name;
    }
    const setName =function(newName){
        this.name = newName
    }
    const printName = function(){
        console.log(name)
    }

    return{
        getName : getName,//오브젝트 리터럴
        setName : setName//오브젝트 리터럴
    }
}

const obj=getObj();
console.log(obj);
```
* 이름과 밸류값이 동일하면 똑같이 처리할 수 있습니다.
```js
function getObj(){
    const name ='kim'
    const getname = function(){
        return name;
    }
    const setName =function(newName){
        this.name = newName
    }
    const printName = function(){
        console.log(name)
    }

    return{getName,setName,name}
}

const obj=getObj();
console.log(obj);
console.dir(obj);
```
* 객체내부에서도 함수를 만들 수 있습니다.
---
#### constant,literal
##### 인프런에 없는 내용 추가
* 상수와 리터럴 두가지 모두 변하지 않는 값을 의미합니다.
* 상수
    * 변하지 않는 변수.
    * 참조변수를 상수로 지정할때, 참조변수만 상수여서 값은 변하지 않습니다.
    * 주소가 가리키는 데이터들 까지 상수가 아닙니다.
* 리터럴
    * 함수 객체는 리터럴로 생성할 수 있다.
    * 리터럴 표기법을 사용하여야한다.
    * 변수 초기화에 종종사용된다.
    * 리터럴은 변수및 상수에 저장되는 값 자체를 리터럴이라고 합니다.
    * 변수나 상수는 값이 저장되어지는 메모리 공간이라면 리터럴은 데이터 자체가 리터럴입니다.
    * 리터럴이란 컴파일시 프로그램 내에 정의되어 있는 그대로 해석되어야 할 값입니다.
    * 객체 리터럴
        * 데이터가 변하지 않도록 설계한 클래스(immutable class) 해당 클래스는 한번 생성하면 객체안의 데이터가 변하지 않습니다.
        * 변환이 필요하면 새로운 객체를 생성합니다.

