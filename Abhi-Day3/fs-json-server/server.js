const fs = require('fs') //File system module

fs.writeFile('./data.json','Hello There!!!!',(err,data)=>{
    if(err){
        console.log('Something went wrong')
    }else{
        fs.appendFile('./data.json','Addding1 text',()=>console.log('append successfullykd'))
    }
    console.log('Err ::',err)    
})