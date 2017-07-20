// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var Places_Traveled = [
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



db.Places_Traveled.create(Places_Traveled, function(err, Places_Traveled){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new destination", Places_Traveled._id)
  process.exit(); // we're all done! Exit the program.
})
