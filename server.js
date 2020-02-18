var express = require('express');
var app = express();
var http=require('http').createServer(app);
var io=require('socket.io')(http);

io.on('connection', function(socket) {
   console.log('connected')
   socket.on('message',function(message)
   {
      
        if(message.type=="login")
        {
            
            socket.join(message.name);
            socket.emit('message',message);
        }
        else
        {
            console.log(message.sender);
            socket.to(message.receiver).emit('message',message);
        }
   }
)});

var server = http.listen(5000, function () {
    console.log('Server is running..');
});





// var WebSocketServer = require('ws').Server,
//     wss = new WebSocketServer({ port: 8888 });
 
// wss.on('listening', function () {
// 	console.log("Server started...");
// });
 
// wss.on('connection', function (connection) {
//    console.log("User connected");
 
//   //message function
//    connection.on('message', function (message) {	
//     if(message.type=="offer")
//     {
//             //connection
//     }
//     else
//     {
        
//     connection.send(message);
//     }
//      console.log("message from user");
    
//   });
  
//   //close the connection
//   connection.on('close', function () {
//     console.log("Disconnecting user");
//   });
 
// });
