const fs = require('fs')
const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    try{
        const data = fs.readFileSync('./data.json')
        res.json(JSON.parse(data))

        //console.log(res.json(data.toString()))
    }catch(e){
        res.status(500).json({
            msg:'Something went wrong'
        })
    }
})

app.listen(8000,()=> console.log('server started'))