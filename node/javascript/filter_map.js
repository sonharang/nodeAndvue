let words = ['spray', 'limit', 'elite', 'exuberant', 'paresent'];

let result = words.filter(function(a,b,c,d){
    //console.log(word,idx,arry);
    console.log(a,b,c,d);
});
let users = [
    
    {
        id:100,
        name:'Hong'
    },
    {
        id:200,
        name:'kang'
    },
    {
        id:300,
        name:'Lee'
    }
]
result = users.map(function(user){
    return{
        id : user.id,
        name : user.name,
        grade : user.id == 200 ? 'VIP' : '일반'
    }
});
console.log(users, result);