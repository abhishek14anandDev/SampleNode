const sayHello =(user, cb) =>{
    console.log('Hello',user)
    cb()
    cb1()
    cb2()
}

sayHello('Abhishek',
()=>console.log('DONE!!!'),
()=>console.log('DONE 1'),
()=>console.log('DONE 2'),
)