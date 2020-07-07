function callMethod(){
    let name ={
        name:'kim',
        callName : function(){console.log(this.name)}
    }
    let name2 ={
        name : 'lee'
    }
    console.log(name.callName()) //'kim'
    console.log(name.callName.call(name2))//'lee'
}

function spreadOpreator(){
    let arr1 = [1,2,3,4,5];
    let arr2 = []
    arr2.push(...arr1);
}

function applyMethod(){
    let nameList =['kim','lee','park'];

    function sayNames(a,b,c){
        console.log(a,b,c)
    }

    console.log(sayNames.apply(null,nameList))//kim lee park
}

function applyMethod2(){
    let arr1 = [1,2,3];
    let arr2 = [4,5,6]
    arr1.push.apply(arr1,arr2); //[1,2,3,4,5,6]
}