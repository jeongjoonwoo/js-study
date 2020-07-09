function arrTest1(){ // 값을 넣어줄때 변수의 갯수 이하를 집어 넣어줄경우.
    let a = 5;
    let b = 3;
    [a,b]=[7];
    console.log([a,b]); //[7,undefined]
}

function arrTest2(){ //배열의 값을 역순으로 변경할 경우
    let a,b,c,d;

    [a,b,c,d] = [1,2,3,4];
    [a,b,c,d] = [d,c,b,a];
    console.log([a,b,c,d]); // [4,3,2,1]
}

function arrTest3(){
    let a,b,c,d;

    [a,b,...c,d] = [1,2,3,4,5,6,7,8,9];//Uncaught SyntaxError: Rest element must be last element

    console.log([a,b,c,d])
}