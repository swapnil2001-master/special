//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "On our platform, you can donate to a nonprofit with confidence. Our robust due diligence process covers legal, compliance, financial and impact checks for each donation made to any non-profit, including in-person visits to beneficiaries and actual feedback reports. We do all this so that our donors can trust that their giving is indeed doing what it's supposed to do - change lives.";
const aboutContent = "It's a private organisation devoted in making people's life better .";
const contactContent = "Contact me at : ";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
  res.render("home", {
    startingContent: homeStartingContent,

    });
});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});






app.listen(process.env.PORT ||3000, function() {
  console.log("Server started on port 3000");
});
