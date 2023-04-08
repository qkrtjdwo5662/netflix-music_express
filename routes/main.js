const express = require('express');

const {getAll} = require('../controllers/mbController');
const albumDB = require('../controllers/albumController');

const router = express.Router();

router.get('/', getAll);

module.exports = router;
