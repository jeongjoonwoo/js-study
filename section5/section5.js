let liList = document.querySelectorAll('li');

function print(){
    let listArr=Array.from(liList)
    let resultArr = listArr.filter((data)=>{
    // dataString = data.innerText
    // if(dataString.includes('e')){
    //     return data
    //     }
    return data.innerText.includes('e');
    })//결과값 동일
    return resultArr
}


console.log(print())
