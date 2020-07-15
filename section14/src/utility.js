export const _ ={
    log(data){
        console.log(data);
    }
}

export default class hello{
    constructor(props){
        this.a='1'
        this.b='2'
    }
    printA(){
        return this.a
    }
    printB(){
        return this.b
    }
}

const getTime = () =>{
    return Date.now()
}

const getCurrentHour = () =>{
    return (new Date).getHours()
}

export {getTime,getCurrentHour} 
