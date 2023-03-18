const FlightModel = require('../models/flight');

module.exports = {
	new: newFlight,
    create,
    index
}

function index(req, res){
    FlightModel.find({})
    .then(function(allFlights){
        console.log(allFlights, " <_ data from the db")
        // respond to the client in the .then, we have to wait 
        // for the data to come back from the database
        res.render('flights/index', {flights: allFlights})
      }).catch(function(err){
        console.log(err);
        res.send(err)
      })    
    }

function create(req, res){
    FlightModel.create(req.body)
        .then(function(createdFlight){
        console.log(createdFlight);
        res.redirect('/flights')

        }).catch((err) => {
            console.log(err);
            res.send('There was an error check the terminal, or log the err object')
        })
}

function newFlight(req, res){
    res.render('flights/new')
}