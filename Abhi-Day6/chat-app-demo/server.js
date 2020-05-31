const http = require('http')
const express = require('express')
const spcketio = require('socket.io')

const app = express();

const server = http.createServer(app);

//connnect socket io to server
const io = spcketio(server);

io.on('connection',(socket)=>{
    console.log('Someone Connected')
    socket.on('Msg from Client',(msg)=>{
        console.log(msg)

        socket.emit('Msg From Server',msg)
    })
})

app.use(express.static('public'))

server.listen(8000,()=>console.log('server created'))