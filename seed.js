// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var new_campsite = {
  description: "Sharp rocks. Middle of nowhere."
}






db.Travel.create(new_Travel, function(err, Travel){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new destination", Travel._id)
  process.exit(); // we're all done! Exit the program.
})
