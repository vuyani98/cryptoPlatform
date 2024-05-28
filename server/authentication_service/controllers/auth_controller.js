const User = require('../Models/userModel');


module.exports.login = async function(req, res){

    console.log('trying to login');
    const { username, password } = req.body;

    let user = await User.findOne({username : username});
    
    // check if user exists
    if (user != undefined){

        let passwordCorrect = (user.password == password) ? true : false;

        //if user is found and the password is correct
        if (passwordCorrect){
            console.log('User found');
           /* const email = await import('emailjs');
            const client = new email.SMTPClient({
                user: "vyanincube@gmail.com",
                password: "@Jesusisking143",
                host: 'smtp.gmail.com',
                ssl: true
            });

            try {

                const message = await client.sendAsync({
                    text: 'Test 1',
                    from: '<vyanincube@gmail.com>',
                    to: '<nvuyani307@gmail.com>',
                    subject: 'test emails'
                });
                console.log(message);

            }
            catch (err){
                console.error(err);
            } */

            res.status(200).send({"message" : "Login successful", "user" : user});
        }

        //if user exists but the password is wrong
        else {
            console.log('Wrong password');
            res.status(403).send({"message" : "Wrong password"})
        }

    }


    //if user does not exists
    else {
        console.log('User not found');
        res.status(404).send({"message": "User not found"});
    }
};

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