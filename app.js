var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose");

//Model Schema
// var Certificate     = require("./models/certificate");

//Setup    
mongoose.connect("mongodb://localhost/cert_reval");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//Routes
var indexRoutes     = require("./routes/index.js"),
    dashboardRoutes = require("./routes/dashboard.js");

app.use(indexRoutes);
app.use(dashboardRoutes);

//Serve
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Serving Application");
});