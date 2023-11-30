//구조 분해 할당(Destructing or Destructure)
let obj = {
    id : 100,
    name : 'Hong',
    birth : '1999-12-25'
}
let {id,name,birth} = obj;
console.log(id,name,birth);

let array =['Hello', 'Nice', 'Monday'];
let [x,y,z] = array;
//[index순서대로] [x,y] (Hello, Nice)가능 [x,z] 한다고 (Hello, Monday) 불가능 
console.log(z,x,y);