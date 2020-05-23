const fs = require('fs')

const readStream = fs.createReadStream('./Topic.txt')

readStream.on('open',(data)=>{
    console.log(data)
})

readStream.on('data',(data)=>{
    console.log(data.toString())
})