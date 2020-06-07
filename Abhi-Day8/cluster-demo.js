const cluster = require('cluster')

const http = require('http')
const os = require('os')

//console.log(cluster.isMaster);
//console.log(cluster.isWorker);

if(cluster.isMaster){
    // console.log("Inside the Master Process :: ");
    // console.log("Master :: ",cluster.isMaster);
    // console.log("Worker :: ",cluster.isWorker);
    console.log('Master Process :: ', process.pid)
    //console.log(os.cpus());
    //fork a new worker process

    const numOfCpu = os.cpus().length;
    console.log(os.cpus().length)
    for(let i = 0;i< numOfCpu;i++){        
        //console.log(i)
        //cluster.fork()
    }
    //cluster.fork()
    //cluster.fork()
}else{
    //console.log('Worker Process ::', process.pid)
    // console.log("Inside the Worker Process :: ");
    // console.log("Master :: ",cluster.isMaster);
    // console.log("Worker :: ",cluster.isWorker);
    //Run an http server

    const server = http.createServer((req,res)=>{
        res.end('Request Handled By :: ' + process.pid)
    })


    server.listen(8000,()=>console.log('Worker process Server Started ::'+ process.pid))
}