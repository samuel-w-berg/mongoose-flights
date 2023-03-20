var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/destinations')

router.post('/flights/:id/destinations', flightsCtrl.create) //route to add destination to show page

module.exports = router;