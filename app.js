const express = require('express');
const bodyParser = require('body-parser');

const testRouter = require('./routes/test');
const loginRouter = require('./routes/login');
const joinRouter = require('./routes/join');

const app = express();

const PORT = 4000;

app.set('view engine', 'ejs'); // ejs로 웹페이지 구성
app.use(express.static('public')); // public로 상위 폴더 변경

// body-parser 관련
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/test', testRouter);
app.use('/login', loginRouter);
app.use('/join', joinRouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(`${err.message} <a href="/">돌아가</a>`);
});

app.listen(PORT, () => {
  console.log(`${PORT}포트 시작`);
});
