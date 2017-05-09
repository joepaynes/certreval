var express     = require("express"),
    router      = express.Router(),
    Certificate = require("../models/certificate");
    
    
router.get('/dashboard', function(req,res){
    res.render("dashboard/index");
});

//CREATE
router.post("/dashboard", function(req,res){
    var name = req.body.name;
    var type = req.body.type;
    var date = req.body.date;
    var note = req.body.note;
    var newCertificate = {name: name, type: type, date: date, note: note};
    
    //Create a new Campground and save to DB
    Certificate.create(newCertificate, function(err, newlyCreated){
        if(err){
            console.log(err);
        }
        else {
        //Redirect
            res.redirect("/dashboard");
        }
    });
});

module.exports = router;