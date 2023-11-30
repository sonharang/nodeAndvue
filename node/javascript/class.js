class Human {
    //필드(생성자 내부에서 생성), 생성자, 메소드
    constructor(){
        this._ssn;
        this._name ='Hong';
        this._age;
    }
    //get과 set이 하나의 기능을 가지고 있음 _ => 숨기기
    set ssn(ssn){
        this._ssn = ssn;
    }
    get ssn(){
        return this._ssn;
    }
    set name(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set age(age){
        this._age = age;
    }
    get age(){
        return this._age;
    }
    getInfo(){
        console.log(this._ssn, this._name, this._age);
    }
}

let hu = new Human();
hu.ssn = '990520';
hu.name = 'Kang';
hu.age = 25;
hu.getInfo();