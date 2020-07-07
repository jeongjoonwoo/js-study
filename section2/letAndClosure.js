const li = document.querySelectorAll('li');

for(var i=0;i<=10;i++){
    console.log(i);
}
console.log(i)//11

for(let j=0;j<=10;j++){
    console.log(j);
}
//console.log(j)//j는 선언되지 않았습니다.

function varEventTest1(){
    for(var i=0;i<li.length;i++){
        li[i].addEventListener('click',function(){
            console.log(`${li[i].innerText} : ${i}`) //오류발생
        })
    }
}
function varEventTest2(){
    for(var i=0;i<li.length;i++){
        li[i].addEventListener('click',clickEvent.bind(null,li[i]))
    }
}
function clickEvent(liList){
    console.log(`${liList.innerText}`)//li의 텍스트값 정상출력
}

function letEventTest1(){
    for(let i=0;i<li.length;i++){
        li[i].addEventListener('click',function(){
            console.log(`${li[i].innerText} : ${i}`) //li의 텍스트와 i값이 정상적으로 출력
        })
    }
}

function init(){
    varEventTest2()
}


