// setTimeout(()=>{
//     console.log('Hello')
// },2000) //Asynchronous



// setInterval(()=>{
//     console.log('Hello set Interval')
// },2000)

// console.log('Outside Set Timeout')//Synchronous

//Asynchronous will be printed at last meaning after all the synchronous functions i.e why console.log is printed first

setTimeout(()=>{
    console.log('Hello')
}) //Asynchronous



setInterval(()=>{
    console.log('Hello set Interval')
})

console.log('Outside Set Timeout')//Synchronous