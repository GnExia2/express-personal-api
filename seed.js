// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var profile = {
  name: "Garrick Ngai",
  githubUsername: "GnExia2",
  githubLink: "https://github.com/GnExia2",
  githubProfileImage: "https://avatars0.githubusercontent.com/u/26442793?v=4&s=400",
  personalSiteLink: "https://www.facebook.com/garrick.ngai.5",
  currentCity: "San Francisco",
  Hobbies:["Hiking", "Photography", "Exotic Sports Cars"]
}






db.Travel.create(new_Travel, function(err, Travel){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new destination", Travel._id)
  process.exit(); // we're all done! Exit the program.
})
