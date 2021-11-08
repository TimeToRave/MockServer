'use strict';

// require packages
const bodyParser = require('body-parser');
const http = require('http');
const fs = require("fs");
const ConsoleWriter = require("./classes/ConsoleWriter");
const express = require('express');
const app = express();

// require app modules
const handlers = require("./handlers");

// specify app parameters
const port = 3000;


app.use(function(req, res, next) {
    console.log("Request accepted");

    const requestInfo = {
        baseUrl: req.baseUrl,
        url: req.url,
        method: req.method,
        headers: req.headers
    }
    
    const consoleWriter = new ConsoleWriter();
    consoleWriter.writeObject(requestInfo);

    let handler = handlers[requestInfo.url];
    let responseBody; 
    if(handler) {
        responseBody = handler(req, res);
    } else {
        return res.status(404).send("API method not found");
    }
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Content-Type', 'application/json');

    res.send(responseBody);
});


app.listen(port);
console.log("Server is listening on " + port + " port")


