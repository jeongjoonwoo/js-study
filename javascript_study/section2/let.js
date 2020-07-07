var var1 = "varscope1";
var var2 =""
function varScope(){
    if(true){
        var var2='hello';//블록으로 묶여있슴.
        console.log(var2) //hello
    }
    var var3 = 'varscope3';
    console.log(var1); //varscope1
    console.log(var2); //hello
    console.log(var3); //varscope3
}
varScope()
console.log(var1); //varscope1
console.log(var2); //""
console.log(var3); //참조에러.


let let1 = "letscope1";
let let2 = "";
function letScope(){
    if(true){
        let let2='hello';//블록으로 묶여있슴.
        console.log(let2) //hello
    }
    let let3 = 'letscope3';
    console.log(let1); //letscope1
    console.log(let2); //""
    console.log(let3); //letscope3
}
letScope()
console.log(let1); //letscope1
console.log(let2); //""
console.log(let3); //참조에러.