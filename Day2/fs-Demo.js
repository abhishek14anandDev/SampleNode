const fs = require('fs')



//in readfile using the callback which is giving error and data. you can give any name what you want
fs.readFile('./Hello.txt',(err,Data)=>{
    console.log('Error :: ',err)
    console.log('Data :: ',Data.toString())
})

//console.log("After Reading file");

try{
    const dataSync = fs.readFileSync('./Hello.txt')
    console.log('Data :: ',dataSync.toString())
    
    console.log("After Reading file");
}catch(ex)
{
console.log(ex);
}
