var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TravelSchema = new Schema({
  description: String
});

var Travel = mongoose.model('Travel', TravelSchema);

module.exports = Travel;
