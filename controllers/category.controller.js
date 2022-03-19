const categoryervice = require('../services/category.service');

const get = function (req, res) {
    if (req.params._id < 1 || req.params._id > 5) {
        res.status(400).json({ errorCode: 400, errorMessage: 'Invalid category id' });
    } else {
        res.send(categoryervice.get(req.params._id));
    }
}

const getAll = function (req, res) {
    res.send(categoryervice.getAll())
}

module.exports = {
    get,
    getAll
};