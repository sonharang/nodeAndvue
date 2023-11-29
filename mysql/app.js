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

app.get('/customerList', async(req, res) => {
    let list = await mysql.query('customerList');
    res.send(list);
});