const User = require('../Models/userModel');
const encrypt = require('./encryption');
const bcrypt = require('bcryptjs')

module.exports.login = async function(req, res){

    console.log('trying to login');
    const { email, password } = req.body;

    let user = await User.findOne({email : email});
    
    // check if user exists
    if (user != undefined){

        let passwordCorrect = bcrypt.compareSync(password, user.password);

        //if user is found and the password is correct
        if (passwordCorrect){
            console.log('User found');
            res.send({"message" : "Login successful", "user" : user.email});
        }

        //if user exists but the password is wrong
        else {
            console.log('Wrong password');
            res.send({"error" : "Wrong password", status: 403})
        }

    }


    //if user does not exists
    else {
        console.log('User not found');
        res.send({"error": "User not found", status: 404});
    }
};

module.exports.register = async function(req, res) {


    console.log('Register controller function called');
   // console.log(req.body)
    const { username, email, password } = req.body;

    let salt = bcrypt.genSaltSync(10);
    let hashedPassword = bcrypt.hashSync(password, salt);

    //check if user is already registered
    let existingUser = await User.findOne({email : email});

    if(existingUser){
        
        console.log('User with the same email already exists');
        res.send({error : 'User already exists', status: 403})
        
    }

    else if( username && email && password){

        try{
            const user = new User({
                username : username,
                email: email,
                password: hashedPassword
            });    
            
            //registering new user to database
            await user.save()
                .then( (result) => {
                    console.log("User registered successfully");
                })
                .catch((error) => {
                    console.log(error);
                    res.send({error: 'Bad request', status: 400});
            });

            res.send({user : user.id});
        }
        catch{
            console.log('Internal Server Error');
            res.send({status : 500, "error": "Internal Server Error"});
        }
    }
    else{
        console.log('Missing parameters');
        res.error({status: 400, error: "Missing Parameters"})
    }

}