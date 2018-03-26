const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public/');
const port = process.env.PORT || 3000;
const app = express();

var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {

    socket.emit('newMessage', {
        from: "Admin",
        text: "Welcome to chat app",
        createdAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from: "Admin",
        text: "new user joined",
        createdAt: new Date().getTime()
    })

    socket.on('createMessage', (newMessage) => {
        console.log('createMessage', newMessage);

        io.emit('newMessage', {
            from: newMessage.from,
            text: newMessage.text,
            createdAt: new Date().getTime()
        })

        // socket.broadcast.emit('newMessage', {
        //     from: newMessage.from,
        //     text: newMessage.text,
        //     createdAt: new Date().getTime()
        // })
    })

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    })
});

app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
