var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')


/* GET users listing. */
// Get the form to fill out to make a new flight
router.get('/new', flightsCtrl.new);
router.get('/', flightsCtrl.index);
router.get('/:id', flightsCtrl.show);
// Submit the filled out form
router.post('/', flightsCtrl.create);
module.exports = router;
