// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/GnExia2/express-personal-api/blob/master/README.md", // CHANGE ME
    baseUrl: "https://enigmatic-wave-47277.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "About me"},
      {method: "GET", path:"/api/travel", description: "Places I've been to"}
    ]
  })
});


app.get('/api/profile', function myProfile(req, res) {
  res.json({
  name: "Garrick Ngai",
  githubUsername: "GnExia2",
  githubLink: "https://github.com/GnExia2",
  githubProfileImage: "https://avatars0.githubusercontent.com/u/26442793?v=4&s=400",
  personalSiteLink: "https://www.facebook.com/garrick.ngai.5",
  currentCity: "San Francisco",
  Pets:[
      {
        name: "Fluffy",
        type: "dog",
      },
      {
        name: "scales",
        type: "snake",
      },
      {
        name: "whiskers",
        type: "cat"
      }
    ]
  })
});



app.get('/api/places', function (req, res) {
  db.Places.find({}, function(err, success){
    console.log("hello I exist")
    if(err){
      return console.log("index err!: ", err);
    } res.json(success);
  })
});

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
