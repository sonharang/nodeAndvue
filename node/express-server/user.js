const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('회원 정보 조회');
});

router.post('/insert',(req,res)=>{
    res.send('회원 정보 등록');
});

router.put('/update',(req,res)=>{
    res.send('회원 정보 수정');
});

router.delete('/delete',(req,res)=>{
    res.send('회원 정보 삭제');
});







module.exports = router; //exports 밑에는 코드 존재하면 안된다.