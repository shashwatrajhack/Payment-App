const express = require('express');
const zod = require('zod');
const {User} = require('../db');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');

const router = express.Router();

const app = express();
app.use(cors());

const signUpBody = zod.object({
    username:zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string()
});

router.post("/signup",async(req,res)=>{
    const {success} = signUpBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"email already taken/invalid input"
        })
    }

    const existingUser = await User.findOne({username:req.body.username});
    if(esistinguUser){
        return res.status(411).json({
            message:"email already taken"
        })
    }

    const user = await User.create({
        username:req.body.username,
        password:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName
    })
    const userId = user._id;
    const token = jwt.sign({userId},JWT_SECRET);

    res.json({
        message:"User created successfully",
        token:token
    })

})

const signInBody = zod.object({
    username:zod.string().email(),
    password:zod.string()
});

router.post("/signin",async(req,res) => {
    const{success} = signInBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"Email already taken/invalid input"
        })
    }
})



module.exports = router;