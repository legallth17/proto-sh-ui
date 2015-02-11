#!/bin/env node

var express = require('express');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var secret = 'STY1673HJ19UUY5DFCVFR';

// Devices
var devices = [{type: 'smoke', name: 'smoke sensor', features: [
                        {type: 'smoke',       security: true, armed: true, alarm: false },
                        {type: 'temperature', temperature: 19 }]},
                     {type: 'door', name: 'door sensor', features: [
                        {type: 'door',      security: true, armed: false, alarm: false }]},
                     {type: 'motion', name: 'motion sensor garage', features: [
                        {type: 'motion',      security: true, armed: true, alarm: !this.alarm },
                        {type: 'luminosity',  luminosity: 650 },
                        {type: 'temperature', temperature: 18 }]},
                     {type: 'motion', name: 'motion sensor living', features: [
                        {type: 'motion',      security: true, armed: true, alarm: this.alarm },
                        {type: 'luminosity',  luminosity: 800 },
                        {type: 'temperature', temperature: 20 }]}];

// Create and configure server

var app = express();

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

// GET devices

app.get('/devices', function(req, res) {
    res.status(200);
    res.json(devices);
});

// Start server

app.listen(port, ipaddress, function() {
    console.log('%s: Node server started on %s:%d ...',
        Date(Date.now() ), ipaddress, port);
});
