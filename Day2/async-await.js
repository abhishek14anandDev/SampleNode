async function main(){
    const promiseObj = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('TEST',3000))
    });

    const data = await promiseObj;

    console.log(data);

    console.log('Outside promise');
}

const main1 =async() =>{
    const promiseObj = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('TEST',3000))
    });
    try{
        const data = await promiseObj;

        console.log(data);
    }catch(e){

}
    

    console.log('Outside promise');
}


main()

main1()

console.log('outside main')

