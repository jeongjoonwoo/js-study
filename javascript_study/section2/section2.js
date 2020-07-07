const closure = document.querySelectorAll('li');

function closure_test(){
    for(var i=0;i<closure.length;i++){
        closure[i].addEventListener('click',function(){
            console.log(i)
        })
    }
}

function closure_let_test(){
    for(let i=0;i<closure.length;i++){
        closure[i].addEventListener('click',function(){
            console.log(i)
        })
    }
}
closure_let_test()

fetch('http://dummy.restapiexample.com/api/v1/employees').then(function(res){
    res.text().then(function(employees){
        let employeesList=JSON.parse(employees).data //dat저장
        let tableHead = Object.keys(employeesList[0]) //테이블 분류저장
        let tableBody = []
        
        employeesList.filter(person=>{
            tableBody.push(Object.values(person)) //사원정보저장
        })
    })
})

