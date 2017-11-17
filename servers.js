var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")


var app = express();
var PORT = 3000;

var friendmatch = [];
var userInfo = [];



app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../app/public/home.html"))

});

app.get("/form", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"))
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"))
});

app.post("/form", function(req, res){
	var reservation = req.body
	console.log(reservation);

	if (table.length > 5) {
		table.push(reservation)
	} else { 
		waitlist.push(reservation) 
	}	
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});