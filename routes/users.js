const express = require("express");
const bcrypt = require("bcrypt");
const { validateUsers, validateLogIn, UserModel, genToken } = require("../models/usersModel");
const { auth } = require("../midleWares/auth");
const router = express.Router();

// get all users

router.get("/", (req, res) => {
    res.json({ msg: "users work" })
})

// checkup whether the user got a valid token  

router.post("/auth", auth, (req,res) =>{
    res.json({msg: "the token Ticket is O.K"});
})

// signup a new user

router.post("/signUp", async (req, res) => {
    let validUser = validateUsers(req.body);
    if (validUser.error)
        return res.status(400).json(validUser.error.details);
    try {
        let user = new UserModel(req.body);
        user.password = await bcrypt.hash(user.password, 10);
        await user.save();
        user.password = "********";
        res.status(201).json({ user });
    }
    catch (err) {
        if (err.code == 11000)
            return res.status(400).json({ code: 11000, err_msg: "email already in system try agein" })
        console.log(err);
        res.status(500).json({ err_msg: "server problem" });
    }
})

// login user

router.post("/login", async (req, res) => {
    let validLogIn = validateLogIn(req.data);
    if (validLogIn.error)
        return res.status(400).json(validLogIn.error.details)

    let user = await UserModel.findOne({email:req.body.email});
    if (!user)
        return res.status(401).json({ err_msg: "user / password not found" })


    let passwordCheck = await bcrypt.compare(req.body.password, user.password);
    if (!passwordCheck)
        return res.status(401).json({ err_msg: "user / password not found" })

    let Ticket = genToken(user._id, user.role);
    res.json({Ticket});
})

module.exports = router;