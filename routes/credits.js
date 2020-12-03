var express = require('express');
var router = express.Router();
const creditsController = require('../controllers/creditsController');

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */
router.get('/', creditsController.credits);

module.exports = router;