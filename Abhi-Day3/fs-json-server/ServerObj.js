const fs = require('fs')

const data = {
    task:[
        {
            id:1,
            title:'Learn Node js'
        },
        {
            id:2,
            title:'learn Mongo Db'
        }
    ]
}
try{
    //fs.writeFileSync('./data.json', JSON.stringify(data) )// data.tostring() will also not work.because writefilesync will try to convert and it will not
    fs.writeFileSync('./data.json', JSON.stringify(data,null,2)) // it will indent the text of json
    console.log('written successfully')
}catch(e){
    console.log('error occured')
}
