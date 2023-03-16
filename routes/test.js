const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('test입니다');
  res.send('test 입니다.');
});

module.exports = router;
