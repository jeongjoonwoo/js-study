import log, {hello as hello2,getTime as getTime2} from "./myLogger.js";
import hello , {_, getCurrentHour ,getTime as test1} from "./utility.js"
log('hello');
log(`getTime is ${test1()}`);
log(`getCurrentHour ${getCurrentHour()}`);
_.log('hello');
const pritnAb = new hello;
_.log(pritnAb.printA());
_.log(pritnAb.printB());
_.log(hello2(1,2));
_.log(getTime2());
