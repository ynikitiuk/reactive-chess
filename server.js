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

  socket.on('MOVE', (action) => {
    io.sockets.emit('MOVE', action)
  });

  socket.on('disconnect', () => console.log('Client disconnected'));
});

server.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));
