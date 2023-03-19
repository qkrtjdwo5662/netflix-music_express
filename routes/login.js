const express = require('express');
const userDB = require('../controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login.ejs');
});

router.post('/', (req, res) => {
  if (req.body.id && req.body.password) {
    userDB.login(req.body, (data) => {
      if (data.length === 1) {
        console.log(data);
        // localStorage.setItem('1','1');
        // localStorage.setItem('ID', data[user_ID]);
        // localStorage.setItem('PW', data[password]);
        res.redirect('/main');
      } else {
        const err = new Error('회원정보 틀림');
        err.statusCode = 400;
        res.redirect('/login');
      }
    });
  } else {
    const err = new Error('제대로 입력해라');
    err.statusCode = 400;
    throw err;
  }
});

module.exports = router;
