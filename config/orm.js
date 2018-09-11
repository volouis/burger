var connection = require("./connection.js");

var orm = {
    selectAll: function(cb){
        var queryString = `SELECT * FROM burgers;`;
        connection.query(queryString, function(err, res){
            if (err) throw err;
            cb(res)
        });
    },
    insertOne: function(name, cb){
        var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES (\"${name}\", false);`;
        connection.query(queryString, function(err, res){
            if (err) throw err;
            cb(res)
        });
    },
    updateOne: function(name, cb){
        var queryString = `UPDATE burgers SET devoured=true WHERE id = \"${name}\"`;
        connection.query(queryString, function(err, res){
            if (err) throw err;
            cb(res)
        });
    }
}

module.exports = orm;
