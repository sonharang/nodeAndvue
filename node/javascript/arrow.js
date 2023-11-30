//함수선언식 -> var의 특징가짐(덮어쓸 수 있음), 위쪽에 배치
function hello(name){
    return "Helo," + name;
}

//화살표함수
let arrHello = (name) => {return "Hello," + name;}
arrHello = name => "Hello," + name;
console.log(arrHello("msg"));



//함수표현식 -> 해당함수 사용되기전에 선언되어야함, 밑쪽에 배치
const message = function (msg){
    return "msg" + msg;
}
function hello(msg){
    return "msg, Hello : " + msg;
}
console.log(hello("world"));

//화살표 함수
let arrMessage = (msg) => {return "msg : " + msg;}
arrMessage = msg => "msg: " + msg;
arrMessage = () => {
                        let today= new Date().getDay();
                        console.log("오늘 날짜", today);
                    }
                    console.log(arrMessage());

