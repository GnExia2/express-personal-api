var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlacesSchema = new Schema({
  location: String,
  Country: String,
  Continent: String
});

var Places = mongoose.model('Places', PlacesSchema);

module.exports = Places;
