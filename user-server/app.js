require('dotenv').config({
    path:'./db/mysql.env'
});

const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
}));

app.listen(3001,()=>{
    console.log('서버 실행!');
});

//전체조회
app.get('/users', async(req, res)=>{ // /뒤에는 그냥 주소값임 db랑 상관없다.
    let list = await mysql.query('userList');
    res.send(list);
});
//단건조회
app.get('/users/:user_no', async(req,res)=>{
    let data = req.params.user_no;
    let result = await mysql.query('userInfo', data);
    res.send(result[0]);
});
//등록
app.post('/users', async (req, res)=>{
    let data = req.body.param;
    let result = await mysql.query('userInsert',data);
    res.send(result);
});
//수정
app.put('/users/:user_no', async (req, res)=>{
    let datas = [req.body.param, req.params.user_no];
    let result = await mysql.query('userUpdate',datas);
    res.send(result);
});
//삭제
app.delete('/users/:user_no', async(req, res)=>{
    let data = req.params.user_no;
    let result = await mysql.query('userDelete',data);
    res.send(result);
});