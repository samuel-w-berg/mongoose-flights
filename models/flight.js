const mongoose = require('mongoose')



// Schema is a guard on our collection that says
// everytime we want to add a document (object) to our collection 
// in mongodb, it must have this shape, 
// keys must be the same name, and the values must be of the type Specified below (String, Number, Boolean, etc)
const flightSchema = new mongoose.Schema({
	airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United']
      },  
	airport:{
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
	flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
	departs: {
        type: Date,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema);
// mongoose.model method does two things
// 1. Creates a collection (The bucket) in mongodb named movies, and it says that all the movie Documents
// that we create need to have the shape of our schema

// 2. Returns an object which is our "Model", which we will use in our controller to perform CRUD operations
// on our database, when our server recieves an http request