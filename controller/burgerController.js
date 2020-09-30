const express = require("express");
const burger = require("../model/burger.js");

let router = express.Router();

// Home page
router.get("/", function (req, res) {
    burger.all(function (burgerData) {
        res.render("index", { burger_data: burgerData });
    });
});

// Post for new burger
router.post("/burgers/create", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        console.log(result);
        res.redirect("/");
    });
});

// Put to update and back to homepage
router.put("/burgers/:id", function (req, res) {
    burger.update(req.params.id, function (result) {

        console.log(result);
        // Everything went well status
        res.sendStatus(200);
    });
});

module.exports = router;