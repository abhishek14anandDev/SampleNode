exports.login = (req,res)=>{
    console.log(req.body)
    res.send('Users Controller :: login() works')
}

exports.register =(req,res)=>{
    console.log(req.body)
    res.send('register controller :: register() works')
}