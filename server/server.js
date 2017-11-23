const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname + '/../public');
console.log(publicPath);

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));
//
// io.on('connection',(socket) => {
//   console.log('new user connected');
// });

io.on('connection',(socket) => {
  console.log('New user connected');
// on - listens to a event from client
  socket.on('createEmail',(msgData) => {
    console.log(msgData);
  });

// emits the function to client
  socket.emit('newMessage',{
    from : 'so@gmail.com',
    text : 'received yuor newMessage'
  })
});

server.listen(port, () => {
  console.log(`server is on ${port}`);
})
