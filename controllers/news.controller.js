const newsService = require('../services/news.service');

const get = async function (req, res) {

    if (req.params._categoryId < 1 || req.params._categoryId > 5) {
        res.status(400).json({ errorCode: 400, errorMessage: 'Invalid category id' });
    } else {
        res.send(await newsService.get(req.params._categoryId, req.query.pageNo));
    }
}

module.exports = {
    get
};