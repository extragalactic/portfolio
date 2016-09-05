// ==========================================================
// Portfolio Node.js server
// ==========================================================

(function() {
"use strict";

// define external modules
var express = require("express");
var http = require("http");
var app = express();
var settings = require("./../dist/serverIP");
var server = http.createServer(app).listen(settings.PORTFOLIO_SERVER_PORT);

// set root folder for Express web server
app.use(express.static("./../dist"));

// --------- start server here ----------
console.log("Starting Portfolio website on " + settings.PORTFOLIO_SERVER_IP + ":" + settings.PORTFOLIO_SERVER_PORT);

exports.mainApp = app;

}());
