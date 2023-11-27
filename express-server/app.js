const express = require('express');
const app = express();

const getData = async () => {
    return await fetch('db.json')
        .then(res => res.json());
}

let db = getData();

app.get('/', (req, res) => { // 라우팅 등록 첫번째 매개변수 = 경로, 두번째 = 대응방법(핸들러)
    res.send('Server Connect');
});

app.get('/posts', (req, res) => {
    res.send(db['posts']);
});

app.listen(3000, () => { // 서버동작 첫번째 = 포트번호
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
});
