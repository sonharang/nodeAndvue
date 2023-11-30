let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let dat = date.getDay();

//``은 줄바꿈 인식함 템플릿기능사용하는경우, 내부에 줄바꿈 하는경우 사용
let msg = `${year}년
${month}월
${dat}일`;
console.log(msg);