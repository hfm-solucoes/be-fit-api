var express = require("express");
var bodyParser = require("body-parser");
var consing = require("consign");

module.exports = function() {
    var app = express();

    // app.use(bodyParser.urlencoded({
    //     extended: false
    // }))

    app.use(bodyParser.json());

    consing({cwd: 'app'})
        .include('controllers')
        .then('routes')
        .then('infra')
        .into(app)

    return app;
}
