const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const port = 3001;

const app = express();

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
  console.log('Client connected');

  socket.on('MOVE', (action) => {
    io.sockets.emit('MOVE', action)
  });

  socket.on('disconnect', () => console.log('Client disconnected'));
});

server.listen(port, () => console.log(`Listening on port ${port}`));