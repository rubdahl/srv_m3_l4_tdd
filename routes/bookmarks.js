var express = require('express');
var router = express.Router();
const { isAuth } = require('../middleware/isAuth');
const db = require('../models');
const BookmarkService = require('../services/BookmarkService');
const bookmarkService = new BookmarkService(db);

/* GET home page. */
router.get('/:id', isAuth, async (req, res, next) => {
    const bookmark = await bookmarkService.getBookmark(req.params.id);
    if (!bookmark) {
        res.status(404).send({message: 'Could not find any bookmarks with that id'})
    } else {
        res.status(200).send({message: 'Success', bookmark})
    }
});

router.post('/', isAuth, async (req, res, next) => {
    try {
        const { Name, URL } = req.body;

        bookmarkService.create(Name, URL, req.user.id).then((bookmark) => {
            res.status(201).send({message: 'Bookmark created successfully'})
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;
