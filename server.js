const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();

const server = http.createServer(app);
const io = socketIo(server);

app.set('port', process.env.PORT || 3001);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

io.on('connection', socket => {
  console.log('Client connected');

  socket.on('createGame', ({name}) => {
    const roomId = new Date().getTime().toString(36);
    socket.join(roomId);
    console.log(io.nsps['/'].adapter.rooms);
    socket.emit('newGame', { name, roomId});
  });

  socket.on('joinGame', ({name, roomId}) => {
    const room = io.nsps['/'].adapter.rooms[roomId];
    if (room && room.length === 1) {
      console.log('Room found!');
      socket.join(roomId);
      console.log(io.nsps['/'].adapter.rooms);
      socket.emit('joinGame', { name, roomId });
      io.sockets.in(roomId).emit('startGame', {});
    } else {
      console.log('No such game or game is full!')
    }
  });

  socket.on('move', ({action, roomId}) => {
    io.sockets.in(roomId).emit('move', action)
  });

  socket.on('disconnect', () => console.log('Client disconnected'));
});

server.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));
