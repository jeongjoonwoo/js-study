import log , {hello as hello2,getTime as getTime2,test1} from "./myLogger.js";
import hello , {_, getCurrentHour ,getTime} from "./utility.js"

log('hello');
log(`getCurrentHour ${getCurrentHour()}`);
_.log('hello');
const pritnAb = new hello;
_.log(pritnAb.printA());
_.log(pritnAb.printB());
_.log(hello2(1,2));
_.log(getTime2());
_.log(test1(1,2));
_.log(a,b,c);