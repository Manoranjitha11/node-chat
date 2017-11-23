
  var socket = io();
  socket.on('connect', function(){
    console.log('connection established');

    socket.emit('createEmail', {
      to : 'someone@xxx.com',
      text : 'Hey'
    });
  });

socket.on('newMessage', function(msgData){
  console.log(msgData);
})

  socket.on('disconnect', function(){
    console.log('disconnected');
  });
