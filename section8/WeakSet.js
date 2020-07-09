function wsTest1(){
    let ws = new WeakSet();

    let arr1 = [1,2,3,4],
        arr2 = [1,2,3,4];
    
    ws.add(arr1);
    ws.add(arr2);

    console.log(ws); //WeakSet {Array(4), Array(4)}
    
}