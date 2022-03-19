const express = require('express');
const router = express.Router({ mergeParams: true });

const newsController = require('../controllers/news.controller');

router.route('/')
    .get(newsController.get);

router.route('/:_categoryId')
    .get(newsController.get);

module.exports = router;