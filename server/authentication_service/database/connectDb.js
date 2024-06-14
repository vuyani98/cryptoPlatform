
const mongoose = require('mongoose');

async function connectdb(){
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected on port 27017")
    }
    catch(error){
        console.log(error);
    }

}

module.exports = {
 connectdb : connectdb
}