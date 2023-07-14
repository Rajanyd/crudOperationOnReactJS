const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");




// router.get("/",(req,res)=>{
//     console.log("connect");
// })

// register user

router.post("/Login", async (req, res) => {
    console.log(req.body);
    const { UserName, Password } = req.body;

    if (!UserName || !Password ) {
        res.status(422).json("plz fill the data");
    }

    try {
        // console.log("jkfjen");
        const preuser = await users.users.findOne({name:UserName,email:Password});
        // console.log("jkfjen");
        console.log("ppppppppppppppppppp",preuser);
        
        if (preuser) {
            console.log("in");
            res.status(201).json("successfuly login");
        } else {
            console.log("out");
            res.status(422).json("this is user is not  present");
        }

    } catch (error) {
        console.log("ereeeeeeee",error);
        res.status(422).json(error);
    }
})
router.post("/register", async (req, res) => {
    // console.log(req.body);
    const { name, email, Gender, Course, mobile, imgUpload, Degination } = req.body;
    if (!name || !email || !Gender || !mobile || !Course || !imgUpload || !Degination) {
        res.status(422).json("plz fill the data");
    }
    // console.log("Rajan",req.body);

    try {

        const preuser = await users.users.findOne({ email: email });
        console.log(preuser);

        if (preuser) {
            res.status(422).json("this is user is already present");
            console.log("bfvj");
        } else {
         
            const adduser = new users.users({
                name, email, Gender, Course, mobile, imgUpload, Degination
            });
            console.log("ejre");
            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        console.log("error");
        res.status(422).json(error);
    }
})

// get user data

router.get("/getdata", async (req, res) => {
    try {
        const userdata = await users.users.find();
        // console.log(userdata);
        res.status(201).json(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})
// get individual user by his Id
router.get("/getUser/:id", async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const userIdividual = await users.users.findById({ _id: id });
        console.log(userIdividual);
        res.status(201).json(userIdividual);
    } catch (error) {
        res.status(422).json(error);
    }
})

// update user data
// patch is update jo jo update kiya gya higa use hi keval and put is for all update 
// so we are use patch method

router.patch("/updateUser/:id", async (req, res) => {

    try {
        console.log(req.params);
        const { id } = (req.params);
        const updateUserData = await users.users.findByIdAndUpdate(id, req.body, {
            new: true
        });
        console.log(updateUserData);
        res.status(201).json(updateUserData);
    } catch (error) {
        res.status(422).json(error);
    }

})

// delete user by id

router.delete("/deleteUserData/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteUserData = await users.users.findByIdAndDelete({_id:id});
        console.log(deleteUserData);
        res.status(201).json(deleteUserData);
    } catch (error) {
        res.status(422).json(error);
    }
})


module.exports = router;