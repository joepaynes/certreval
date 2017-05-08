var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser");
    // mongoose        = require("mongoose");


//Setup    
// mongoose.connect("mongodb://localhost/cert_reval");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//Routes
var indexRoutes     = require("./routes/index.js");

app.use(indexRoutes);

//Serve
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Serving Application");
});