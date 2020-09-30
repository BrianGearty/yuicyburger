const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controller/burgerController.js");

let PORT = process.env.PORT || 8080;
let app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on port:", PORT);
});
