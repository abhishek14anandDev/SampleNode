const student = {
    name:'Abhishek',
    email:'abhsihek14anand@!live.com',
    sem:6,

    toString:function(){
        return this.name + ' ' + this.email+ ' '+this.sem
    }
}

//console.log('Name ::'+student.name)
//console.log('Student ::',student.toString()) //here we need to use tostring method..

//console.log('Student ::'+ student) //Converting to string
//console.log('Student ::', student)// return full Object

console.log(`Student :: ${student}`) //in this tag trying to convert anything to string which is wrong
