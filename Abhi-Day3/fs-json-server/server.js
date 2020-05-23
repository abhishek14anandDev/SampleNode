const fs = require('fs') //File system module

fs.writeFile('./data.json','Hello There!!!!',(err,data)=>{
    if(err){
        console.log('Something went wrong')
    }else{
        //fs.appendFile('./data.json','Addding1 text',()=>console.log('append successfullykd')) //this is async
        try{
            fs.appendFileSync('./data.json','Adding Text')
            console.log('append successfull')
        }
        catch(e){
            console.log('error in append')
        }
    }
    console.log('Err ::',err)    
})

const data = fs.readFileSync('./data.json') //it will not work because of write file.
console.log(data.toString())