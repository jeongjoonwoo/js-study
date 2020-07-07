let globalArray =['hello','bye','good','bad']
function forOf(){
    for(let i of globalArray){
        console.log(i) //hello bye good bad
    }
}

function forIn(){
    for(let i in globalArray){
        console.log(globalArray[i]) //hello bye good bae
    }
}