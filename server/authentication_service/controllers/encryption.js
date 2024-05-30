const bcrypt = require('bcrypt');

module.exports = async function hashedPassword(plainpass){

    bcrypt.genSalt(10, (err, Salt)  => {

        bcrypt.hash(plainpass, Salt, (err, hash) => {

            if(err) {
                console.log('Cannot encrypt');
                return plainpass;
            }
            return hash;

        });
    })
}

