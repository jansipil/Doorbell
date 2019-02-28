var express = require('express');
var app = express();
var server = app.listen(8080);
var io = require('socket.io').listen(server);
var path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

console.log('Server running on port 8080');

var state = "green";

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  
  socket.on('init', function(){
    if(state==="red"){
      io.emit('init');
      socket.broadcast.emit('init');
    }
  })

  socket.on('check', function(data) {
    value = data;
    if (state === "green" && value === 1) {
      //console.log("change:" + value);
      state = "red";
      io.emit('change', 0);
      socket.broadcast.emit('change', 0);
      setTimeout(function(){
        state = "green";
        //console.log(state);
        io.emit('change', 1);
        socket.broadcast.emit('change', 1);
      }, 10000);      
    }
  });
});