// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")


var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());


app.use(express.static('app'));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);



// var friendmatch = [];
// var userInfo = [];


// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "./app/public/home.html"))

// });

// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "./app/public/survey.html"))
// });


// app.post("/form", function(req, res){
// 	var reservation = req.body
// 	console.log(reservation);

// 	if (table.length > 5) {
// 		table.push(reservation)
// 	} else { 
// 		waitlist.push(reservation) 
// 	}	
// });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});