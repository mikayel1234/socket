var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var xy = [];
var c=0;
app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);
io.on('connection', function (socket) {
    
    
       function a()
       {
            c+=0.05;
            io.sockets.emit("newy", c);
       }
       setInterval(a,50);
    
 });
 