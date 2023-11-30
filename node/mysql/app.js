require('dotenv').config({
    path: './db/mysql.env'
});
const express = require('express');
const app = express();
const mysql = require('./db.js');



app.use(express.json({
    limit: '50mb'
}));

app.listen(3000, () => { // 서버동작 첫번째 = 포트번호
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
});

//전체조회
app.get('/customers', async (req, res) => {
    let list = await mysql.query('customerList');
    res.send(list);
});
//단건조회
app.get('/customers/:id', async (req,res)=>{
    let data = req.params.id;
    let result = await mysql.query('customerInfo', data);
    res.send(result[0]);
})
//등록
app.post('/customers', async (req, res) => {
    let data = req.body.param;
    let result = await mysql.query('customerInsert', data);
    res.send(result);
});
//수정
app.put('/customers/:id', async (req, res) => {
    let datas = [req.body.param, req.params.id];
    let result = await mysql.query('customerUpdate', datas);
    res.send(result);
});

//삭제
app.delete('/customers/:id', async(req, res)=>{
    let data = req.params.id;
    let result = await mysql.query('customerDelete', data);
    res.send(result);
});