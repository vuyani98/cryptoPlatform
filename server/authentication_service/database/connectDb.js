const mongoose = require('mongoose');

async function connectdb(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/cryptX');
        console.log("Database connected on port 27017")
    }
    catch(error){
        console.log(error);
    }

}

module.exports = {
 connectdb : connectdb
}