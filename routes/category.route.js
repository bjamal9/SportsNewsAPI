const express = require('express');
const router = express.Router({ mergeParams: true });

const categoryController = require('../controllers/category.controller');

router.route('/')
    .get(categoryController.getAll);

router.route('/:_id')
    .get(categoryController.get);

module.exports = router;