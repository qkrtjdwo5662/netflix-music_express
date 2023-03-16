const express = require('express');
const userDB = require('../controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login.ejs');
});

router.post('/', (req, res) => {
  if (req.body.id && req.body.password) {
    userDB.login(req.body, (data) => {
      console.log(data);
      res.send('로그인 성공');
    });
  } else {
    const err = new Error('제대로 입력해라');
    throw err;
  }
});

module.exports = router;
