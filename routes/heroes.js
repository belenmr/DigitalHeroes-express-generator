var express = require('express');
var router = express.Router();
const heroesController = require('../controllers/heroesController');

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */
router.get('/', heroesController.showHeroes)
router.get('/detalle/:id', heroesController.detail);
router.get('/bio/:id/:ok?', heroesController.biography);

module.exports = router;
