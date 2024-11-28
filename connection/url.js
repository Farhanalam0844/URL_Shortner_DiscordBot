const   mongoose  = require("mongoose");

async function handleConnectMongoDB(url){
   return mongoose.connect(url).then(
        console.log("MongoDb Connected")
    )
}

module.exports={
    handleConnectMongoDB,
}