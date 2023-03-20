const express = require('express');

const mbDB = require('../controllers/mbController');

const router = express.Router();

router.get('/', (req, res) => {
  mbDB.getAll((data) => {
    // const mbLength = data.length;
    res.render('main.ejs', { data });
  });
});

module.exports = router;
