//import events from 'events'
const events = require('events')

const eventEmitter = new events.EventEmitter();

//eventEmitter.emit():- to trigger the event
// eventEmitter.on():- to listen the event

//first we need to write listen because we are registering the method, and whenever methos is going to be emit it will get called.
// eventEmitter.on('Test Event',(data)=>{
//     console.log('I am in test event :', data)
// })

// eventEmitter.on('Test Event',(data)=>{
//     console.log('I am in test event 1 :-',data)
// })

//eventEmitter.emit('Test Event',2) //hooking up the event
//eventEmitter.emit('Test Event',3)

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.method)
    eventEmitter.emit('onServerAccess',req.method) // Browser is accessing:- that is always get
    res.end('Server is working')
})

eventEmitter.on('onServerAccess',(method)=>{
    console.log('Someone Accessd the server,Method is:-',method)
})

server.listen(8000,()=> console.log('server started'))