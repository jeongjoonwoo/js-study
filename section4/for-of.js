const globalArray =['hello','bye','good','bad']
function forOf(){
    for(let i of globalArray){
        console.log(i);
    }   
}

function forIn(){
    for(let i in globalArray){
        console.log(globalArray[i]);
    }   
}

