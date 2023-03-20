const express = require('express');
const userDB = require('../controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
  const userId = req.signedCookies['ID'];
  const userPw = req.signedCookies['PW'];
  res.render('login.ejs', { userId, userPw });
});

router.post('/', (req, res) => {
  if (req.body.id && req.body.password) {
    userDB.login(req.body, (data) => {
      if (data.length === 1) {
        // console.log(data);
        res.cookie('ID', req.body.id, {
          httpOnly: true,
          signed: true,
        });
        res.cookie('PW', req.body.password, {
          httpOnly: true,
          signed: true,
        });
        console.log(req.cookies.ID);
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
