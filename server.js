var express = require("express");
var stache = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080 ;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", stache({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller")
app.use(routes)

app.listen(PORT, function(){
    console.log("Sever is active and listening on PORT: " + PORT)
})