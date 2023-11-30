const express = require('express');
const app = express();

//라우터불러오기
const userRouter = require('./user.js');
app.use('/user', userRouter);
app.use('/public', express.static('images'));
app.use(function (err, req, res, next) {
    res.status(500).json({
        statusCode: res.statusCode,
        errMessage: err.message
    });
});

app.get('/error', (req, res, next) => {
    next(new Error('Process Fail! Check Data'));
});

//패치 안돼서 파일시스템으로
const fs = require('fs');
const jsonFile = fs.readFileSync('db.json');
const jsonData = JSON.parse(jsonFile);
const getData = (target, where) => { //전체조회 posts, 단건조회 posts/id값 (1,2,3)
    //db.json => jsonData 객체
    let data = jsonData[target]; //target은 key값
    if (Array.isArray(data)) { //Array.isArray(data) => data가 배열인지 확인 
        let list = data;
        for (let obj of list) {
            if (obj.id == where) {
                data = obj;
            }
        }
    }
    return data;
}

// const getData = async () => { //환경이 달라서 패치 사용불가
//     return await fetch('db.json')
//         .then(res => res.json());
// }

// let db = getData();

// app.get('/posts', (req, res) => {
//     res.send(db['posts']);
// });

app.get('/', (req, res) => { // 라우팅 등록 첫번째 매개변수 = 경로, 두번째 = 대응방법(핸들러)
    res.send('Server Connect');
});

app.get('/posts', (req, res) => {
    let data = getData('posts');
    //res.send(data);
    res.json(data);
});

app.get('/posts/:id', (req, res) => { //?아니고 :
    let data = getData('posts', req.params.id); //body 안에 부를때 params 사용
    //res.send(data);
    res.json(data);
});

app.get('/comments', (req, res) => {
    let data = getData('comments');
    res.send(data);
});

app.get('/comments/:id', (req, res) => {
    let data = getData('comments', req.params.id);
    res.send(data);
});

app.get('/profile', (req, res) => {
    let data = getData('profile');
    res.send(data);
});

//app.route
app.route('/emps')
    .get((req, res) => {
        res.send('사원 전체조회');
    })
    .post((req, res) => {
        res.send('사원 등록');
    })
    .put((req, res) => {
        res.send('사원 수정');
    })
    .delete((req, res) => {
        res.send('사원 삭제');
    })

app.listen(3000, () => { // 서버동작 첫번째 = 포트번호
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
});