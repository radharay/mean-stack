// config/express.js
var express = require('express');

module.exports = function () {
    var app = express();
    app.set('port', 3000)
};