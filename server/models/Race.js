var mongoose = require('mongoose');

// Create the RaceSchema.
var RaceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

// Export the model.
module.exports = mongoose.model('race', RaceSchema);
