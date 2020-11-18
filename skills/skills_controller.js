var express = require("express");
var router = express.Router();

var Skills = require("./skills_schema");

router.get("/", (req, res) => {
    Skills.find({}, function(err, results) {
        if (err) return;
        res.json(results);
    });
});

module.exports = router;