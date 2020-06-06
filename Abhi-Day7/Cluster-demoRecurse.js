const cluster = require('cluster')
const http = require('http')
const os = require('os')
if(cluster.isMaster) {
    console.log('Master Process :: ', process.pid)
    const numCpus = os.cpus().length
    for(let i=0; i<numCpus; i++) {
        const worker = cluster.fork()
        worker.on('exit', (code, signal) => {
            if(code !== 0) {
                cluster.fork()
            }
        })
    }

    
} else {
    const server = http.createServer((req, res) => {
        res.end('Request Handled By :: ' + process.pid)
    })
    server.listen(4200, () => console.log('Worker Process Server Started :: ', process.pid))
}