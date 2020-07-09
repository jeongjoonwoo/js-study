function setTest1(){
    let mySet1 = new Set('hello');
    let mySet2 = new Set(['hello','hello'])

    console.log(mySet1) //{'h','e','l','o'} l은 중복값이 삭제되어집니다.
    console.log(mySet2) //{'hello} hello 값 하나만 올라갑니다.
    console.dir(mySet1);/*[[Entries]]
                            0: "h"
                            1: "e"
                            2: "l"
                            3: "o"*/
    console.log(mySet1["entries"]()) // SetIterator {"h" => "h", "e" => "e", "l" => "l", "o" => "o"}
}