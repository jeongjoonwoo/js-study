function objTest1(){
    let {a: aa = 10, b: bb = 5} = {a: 3};

    console.log(aa); //3
    console.log(bb); //5
}

const innerObj1 = {
    b : {x:20 , y:30},
    c : 30,
}

function objTest2(obj){ es5
    obj = obj === undefined ? {} : obj;
    let a = obj.a === undefined ? 'hello' : obj.a;
    let b = obj.b === undefined ? {x:0,y:0} : obj.b;
    let c = obj.c === undefined ? 25 : obj.c;
    console.log(a,b,c,)
}

function objTest3({a ='hello',b={x:0,y:0},c=25}={}){ es2015
    console.log(a,b,c)
}//동일한 값

const innerObj2 = [
    {
        name : 'jay',
        age : '30',
        gender : 'male',
        address : {
            country : 'korea',
            city : 'seoul'
        }
    },
    {
        name : 'marry',
        age : '35',
        gender : 'female',
        address : {
            country : 'U.S.A',
            city : 'newYork'
        }
    }
];

function objTest4(obj){
    for(let {name : n,age : a,address : {city : c}} of obj){
        console.log(n,a,c) //jay 30 seoul
                           //marry 35 newYork
    }   
}