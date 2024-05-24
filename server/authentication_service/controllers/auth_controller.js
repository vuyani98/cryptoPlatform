const User = require('../Models/userModel');

module.exports.register = async function(req, res) {

    console.log('Register controller function called');
    console.log(req.body)
    const { username, email, phoneNumber, password } = req.body;
    
    //check if user is already registered
    let existingUser = await User.find({email : email});

    if( existingUser ){
        console.log('User with the same email already exists');
        res.status(403).send({body : "User with the same email already exists"});
    }

    else if( username && email && phoneNumber && password){

        try{
            const user = new User({
                username : username,
                email: email,
                phoneNumber: phoneNumber,
                password: password
            });    
            
            //registering new user to database
            user.save()
                .then( (result) => {
                    console.log(result);
                    console.log("User registered successfully");
                    res.sendStatus(201);
                })
                .catch((error) => {
                    console.log(error);
                    res.sendStatus(400);
                });
        }
        catch{
            console.log('Internal Server Error');
            res.sendStatus(500);
        }
    }
    else{
        console.log('Missing parameters');
        res.sendStatus(400)
    }

}