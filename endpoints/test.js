exports.handler= async (event)=>{
    const { name } = event.queryStringParameters

    if(name !=='Busiswa'){
        return{
            statusCode:301,
            body:JSON.stringify({message:"your are not allowed to access data"})
        }
    }
    return{
            statusCode:200,
            body:JSON.stringify({message:"Hello There!"})
    }
}