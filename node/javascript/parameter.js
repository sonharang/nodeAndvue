function printMsg(msg = '메세지를 입력해주세요', to =''){
    console.log(msg,to);
}
printMsg('Have A Nice Day',"Hello");
printMsg();

//오버로딩 없는 자바스크립트에서 비슷한 기능 구현 
function sum(x,y, ...args){
    let result = x + y;
    console.log(args.length);
    for(let num of args){
        result += num;
    }
    return result;
}
console.log(sum(1,2));
console.log(sum(1,2,10));
console.log(sum(1,2,10,20));
