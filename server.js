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
    socket.emit('gameCreated', { name, roomId });
  });

  socket.on('joinGame', ({name, roomId}) => {
    const room = io.nsps['/'].adapter.rooms[roomId];
    if (room && room.length === 1) {
      socket.join(roomId);
      socket.emit('gameJoined', { name, roomId });
      io.sockets.in(roomId).emit('startGame', {});
    }
  });

  socket.on('makeMove', ({action, roomId}) => {
    io.sockets.in(roomId).emit('moveMade', action)
  });

  socket.on('disconnecting', () => {
    for (let room in socket.rooms) {
      io.sockets.in(room).emit('endGame', {})
    }
  });

  socket.on('disconnect', () => console.log('disconnect'));
});

server.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));
