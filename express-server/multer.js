const multer = require('multer');
const path = require('path');

const express = require('express');

const app = express();

//multer는 저장소 설정해줘야함
const storage = multer.diskStorage({
    //경로
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().valueOf() + path.basename(file.originalname));
    }
});

const upload = multer({
    storage: storage
});

app.post('/profile', upload.single('avatar'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
});
app.post('/photos', upload.array('photos', 12), (req, res) => {
    for (let file of req.files) {
        console.log(file);
    }
});

app.listen(5000, () => { // 서버동작 첫번째 = 포트번호
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
});