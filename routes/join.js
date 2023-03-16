const express = require('express');
const userDB = require('../controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('join.ejs');
});

router.post('/', (req, res) => {
  if(req.body.id && req.body.name && req.body.password) {
    userDB.join(req.body, (data) => {
      console.log(data);
      if (data.affectedRows > 0) {
        res.send('가입 처리 완');
      } else {
        res.send('가입 처리 불완');
      }
    });
  } else {
    const err = new Error('비었으니 제대로 입력해라');
    throw err;
  }
});

module.exports = router;
