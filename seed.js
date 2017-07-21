// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var places = [
  {
    location: "Hong Kong",
    Country: "China",
    Continent: "Asia"
  },
  {
    location: "Colorado",
    Country: "United States",
    Continent: "North America"
  },
  {
    location: "Rome",
    Country: "Italy",
    Continent: "Europe"
  }
]


db.Places.remove({}, function(err, success) {

  db.Places.create(places, function(err, places){
    console.log("places are : ", places);
    if (err){
      return console.log("Error:", err);
    }
    process.exit(); // we're all done! Exit the program.
  });
});
