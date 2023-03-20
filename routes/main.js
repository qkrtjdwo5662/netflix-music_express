const express = require('express');

const mbDB = require('../controllers/mbController');
const albumDB = require('../controllers/albumController');

const router = express.Router();

router.get('/', (req, res) => {
  mbDB.getAll((data) => {
    const mainBanner = data;
    albumDB.getAll((data) => {
      const album = data;
      console.log(album);
      res.render('main.ejs', { mainBanner, album });
    });
  });
  // albumDB.insertImg('./img/main_album/main_album2.png', (data) => {
  //   console.log(data);
  // });
});

module.exports = router;
