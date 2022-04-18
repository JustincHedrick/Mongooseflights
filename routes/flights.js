var express = require('express');
var router = express.Router();
flightsCtrl = require('../controllers/flights')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/index', flightsCtrl.index);
router.post('/', flightsCtrl.create);
router.get('/new', flightsCtrl.new);


module.exports = router;