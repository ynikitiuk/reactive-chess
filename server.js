const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.set('port', process.env.PORT || 3001);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'), (err) => {
      if (err) {
        res.status(500).send(err)
      }
    })
  });
}

io.on('connection', socket => {
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
      io.sockets.in(room).emit('endGame', {});

      for (let socketId in io.sockets.in(room).sockets) {
        io.sockets.sockets[socketId].leave(room);
      }
    }
  });
});

server.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));
