var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")

router.get("/", function(req, res){
    burger.all(function(data){
        var output = {
            burger: data
          };      
          res.render("index", output);
    })
})

router.post("/burger", function(req, res){
    burger.create(req.body.name, function(result){
        res.json({ id: result.insertId });
    })
})

router.put("/burger/:id", function(req, res){
    console.log(req.params.id)
    var change = req.params.id;
    burger.update(change, function(result){
        res.status(200).end();
    })
})


module.exports = router;

