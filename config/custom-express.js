var express = require("express");
var bodyParser = require("body-parser");
var consing = require("consign");
var expressValidator = require("express-validator");

module.exports = function() {
    var app = express();

    // app.use(bodyParser.urlencoded({
    //     extended: false
    // }))
    app.use(bodyParser.json());
    app.use(expressValidator());
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
        next();
      });

    consing({cwd: 'app'})
        .include('controllers')
        .then('routes')
        .then('infra')
        .into(app)

    return app;
}
