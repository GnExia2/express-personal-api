var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Places_TraveledSchema = new Schema({
  location: String,
  Country: String,
  Continent: String
});

var Places_Traveled = mongoose.model('Places_Traveled', Places_TraveledSchema);

module.exports = Places_Traveled;
