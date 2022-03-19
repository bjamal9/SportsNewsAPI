const express = require('express');
const news = require('./news.route');
const categories = require('./category.route');

const router = express.Router();

router.use('/news', news);
router.use('/categories', categories);

router.get('/', (req, res) => res.send('Sample Node API Version1'));
router.get('/health', (req, res) => {
    const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    };
    res.send(JSON.stringify(healthcheck));
});

module.exports = router;