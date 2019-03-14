var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Your first Express App', message: 'Express is actually pretty easy once you figure a few things out' });
});

module.exports = router;
