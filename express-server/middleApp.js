const express = require('express');
const session = require('express-session');
const cors =require('cors');
const app = express();

// application/www-form-urlencoded
const defaultParser = express.urlencoded({
    extended: false
});
// application/json
const jsonParser = express.json();

//전체 라우팅에 적용
app.use(defaultParser);

//
app.post('/info', (req, res) => {
    res.send('welcome, ' + req.body.name);
});

//라우터별로 등록
app.post('/message', jsonParser, (req, res) => {
    res.send('MSG:, ' + req.body.message);
});

app.listen(5000, () => { // 서버동작 첫번째 = 포트번호
    console.log('server start!');
    console.log('http://localhost:5000');
});

let sessionSetting = session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true, //javascript에서 접근 x (true일때)
        secure: false, //https 보안프로토콜 (true일때)
        maxAge: 60000 //cookie 유효기간
    }
});

app.use(sessionSetting);

const corsOptions = {
    //origin : 'http://192.168.0.37:5500',
    orgin : 'localhost:5500',
    optionsSuccessStatus : 200
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send(req.session);
});

app.post('/login', (req, res) => {
    const {
        id,
        pwd
    } = req.body;
    req.session.user = id;
    req.session.pwd = pwd;
    req.session.save(function(err){
        if(err) throw err;
        res.redirect('/');
    })
});

app.get('/logout',(req,res)=>{
    req.session.destroy();
    req.redirect('/');
});
