var express = require('express');
var router = express.Router();
const { isAuth } = require('../middleware/isAuth');
const db = require('../models');
const BookmarkService = require('../services/BookmarkService');
const bookmarkService = new BookmarkService(db);

/* GET home page. */
router.get('/', isAuth, async (req, res, next) => {});


module.exports = router;
