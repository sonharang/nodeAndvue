//펼침연산자 ... -> 많이 사용한다.
let array =[1,2,3];
let string ="Hello";
// [1,2,3,"H","e","l","l","o"] -> for of 로도 가능은한데 길고 복잡;
let newArray = [...array, ...string];
console.log(newArray);