const global = {
    a:'hello',
    b:'bye',
    c:'good',
    d:'bad'
};
function constArr(){
    const arr =['hello','bye','good','bad'];
    arr[1] = 'hello!'; //내부값은 보호받지 못함.
    console.log(arr)
}

function constGlobal(){
    global.a ='hello!'
    console.log(global) //내부 프로퍼티는 보호받지 못함.
}

function constCopy(){
    const globalCopy1 = global; //같은값을 참조하여서 global이 변경할시 동시에 변경되어짐.
    const globalCopy2 = [].concat(global);// 값을 복사하여 새로운 객체를 생성하여 값은 동일하지만 참조값이 달라 global이 변경되어도 적용되지 않음.
}