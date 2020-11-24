var express = require("express");
var router = express.Router();

var testimonials = require("./testimonial_schema");

router.get("/", (req, res) => {
    testimonials.find({}, function(err, results) {
        if (err) return;
        res.json(results);
    });
});

module.exports = router;