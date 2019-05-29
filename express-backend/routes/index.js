var express = require('express');
var router = express.Router();
const db = require('../db')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send({title: 'Express'});
});

/* GET home page. */
router.get('/insertTest', function (req, res, next) {
    db.insertTest();
    res.send({title: 'Express'});
});

/* GET home page. */
router.get('/findTest', function (req, res, next) {
    db.findTest()
    res.send({title: 'Express'});
});

module.exports = router;
