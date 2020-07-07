function addMark2(){
    let dataArr = [...arguments]
    let newData = dataArr.map(function(value){ 
        return value + '!'
    })
    console.log(newData) //(5) ["1!", "2!", "3!", "4!", "5!"]
}

addMark2(1,2,3,4,5)

function arrayFrom(){
    let str = '1,2,3,4,5'
    console.log(Array.from(str)) // ["1", ",", "2", ",", "3", ",", "4", ",", "5"]
    let obj ={
        a:1,
        b:2,
        c:3
    }
    console.log(Array.from(obj))//[]
}

 