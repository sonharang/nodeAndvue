const defaultNum = 1;

function add(num1, num2){
    return num1 + num2;
}

function minus(num1, num2){
    return num1 - num2;
}
function multi(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}
//모듈형태로 받을때 require
module.exports={
    defaultNum,
    add,
    minus,
    multi,
    divide
}
//파일 분리 방법 받을때 import
//export default {}