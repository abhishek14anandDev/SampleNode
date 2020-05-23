//promise - es6
//  -resolve - .then()
//  -rejection - .catch()

const promiseObj = new Promise((res, rej)=>{
    setTimeout(()=>{
        res('I am in set timeOut')
    },2000)
    console.log('Inside Promise')
    res("Abhsihek")
    
})

promiseObj.then((data)=>{
    console.log('Inside Then',data)
    return data.msg //Passing data to one then to another then.
})
.then((m)=>{
    console.log('inside 2nd Then,',m)
})
.catch(()=>{
    console.log('inside catch')
})

console.log(promiseObj)