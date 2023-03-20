const FlightModel = require('../models/flight');

module.exports = {
	create
}

function create(req, res){
    FlightModel.findById(req.params.id)
            .then(function(flightDoc){
                console.log(flightDoc, '<--- Flight Document');
                flightDoc.destinations.push(req.body);
                flightDoc.save()
                        .then(function(){
                            res.redirect(`/flights/${req.params.id}`)
                        })
            }).catch(err =>{
                console.log(err);
                res.send(err)
            })
}