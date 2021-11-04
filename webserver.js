#!/usr/bin/env node
'use strict';

// Default port for this server is 8080. Overridable with -p/--port.
let port = 8080;

const { ArgumentParser } = require('argparse');
const { version } = require('./package.json');

const parser = new ArgumentParser({
  description: 'Argparse functionality'
});

parser.add_argument('-p', '--port', { help: 'Define port for web server' });
let args = parser.parse_args();

if(args.port) port = parseInt(args.port);

var express = require('express');
var app = express();


var server = app.listen(port);
var io = require('socket.io')(server);
var path = require('path');
var fs = require('fs')

const dirPath = path.join(__dirname, '/public');
app.use(express.static(dirPath));

console.log(`Server running on port ${port}`);

var state = "green";

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function (socket) {
  
  socket.on('init', function(){
    if(state==="red"){
      io.emit('init');
      socket.broadcast.emit('init');
    }
  })

  socket.on('check', function(value) {
    if (state === "green" && value === 1) {
      //console.log("change:" + value);
      state = "red";
      fs.readdir(dirPath + "/audio", function(err, files){
        let randomSound = files[Math.floor(Math.random() * files.length)];
        //console.log(randomSound);
        io.emit('change', 0, randomSound);
        socket.broadcast.emit('change', 0, randomSound);
        setTimeout(function(){
          state = "green";
          //console.log(state);
          io.emit('change', 1);
          socket.broadcast.emit('change', 1);
        }, 10000);
      });
    }
  });
});
