
var friends = require("../data/friends.js");


module.exports = function(app) {

    app.get("/api/friends",function(req,res){
        res.json(friends);
    });


// went through this part with the tutor but Im still a little confused on how it works so Im stuck trying to understand why Im getting a 500 message. 

    app.post("/api/friends", function(req,res){

        // var bestMatch = {
        //     name: "",
        //     photo:"",
        //     friendDifference: 1000
        // }

        // var userData = req.body;
        // var userScore = userData.scores;

        // var totalDifference = 0;

        // for(var i = 0; i < friends.length; i++){

        //     console.log(friends[i].name);
        //     totalDifference = 0;

        //     for (var j = 0; j < friends[i].score[j]; j++) {
                
        //         totalDifference += Math.abs(parseInt(userScore[j])- parseInt(friends[i].scores[j]));
                
        //         if (totalDifference <= bestMatch.friendDifference) {
        //             bestMatch.name = friends[i].name;
        //             bestMatch.photo = friends[i].photo;
        //             bestMatch.friendDifference = totalDifference;
        //         }
        //     }
        // }
        // friends.push(userData);

        // res.json(bestMatch);
    });

}