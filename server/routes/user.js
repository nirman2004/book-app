const { Express } = require("express");
const user = require("../models/user")
const bcrypt = require("bcryptjs")
const router = require("express").Router();
const jwt = require("jsonwebtoken")
const {authenticateToken} = require("./userAuth")
//Add Sign Up
router.post("/sign-up", async(req,res)=>{
    try{
        const {username,email,password,address} =req.body;

        if(username.length<4){
            return res.status(400).json({message:"Username length should be greater than 3"});
        }

        const existingUsername = await user.findOne({ username:username});
        if(existingUsername){
            return res.status(400).json({message:"Username already exists"});
        }

        existingEmail = await user.findOne({ email:email});
        if(existingEmail){
            return res.status(400).json({message:"Email already exists"});
        }

        if(password.length<=5){
        return res.status(400).json({message:"Password length should be greater than 5"});
        }
        const hashPass = await bcrypt.hash(password,10);
        const newUser = await user.create({username:username,
            email:email,
            password:hashPass,
            address:address,});
            await newUser.save();
            return res.status(200).json({message: "SignUp successsfully"})
    } catch(error){
        res.status(500).json({message:"Internal server error"});
    }
});

//Sign in

router.post("/sign-in", async(req,res)=>{
    try{
        const {username,password} =req.body;

        const existingUser = await user.findOne({username});
        if(!existingUser){
            res.status(400).json({message: "Invalid Credentials"});
        }

        await bcrypt.compare(password, existingUser.password,(err,data)=>{
            if(data){
                const authClaims = [
                    {name:existingUser.username},{role:existingUser.role},
                ];
                const token = jwt.sign({authClaims}, "bookStore123",{expiresIn:"30d",})
                res.status(200).json({id: existingUser._id,role:existingUser.role, token:token,});
            }
            else{
                res.status(400).json({message: "invalid Credentials"});
            }
        })
    } catch(error){
        res.status(500).json({message:"Internal server error"});
    }
});



router.get("/get-user-information",  authenticateToken, async(req,res)=>{
try{
    const {id} =req.headers;
    const data = await user.findById(id).select("-password");
    return res.status(200).json(data);
}catch(error){
    res.status(500).json({message:"Internal server error"}); 
}
});

router.put("/update-address", authenticateToken,async(req,res)=>{
    try{
        const {id} = req.headers;
        const {address} = req.body;
        await user.findByIdAndUpdate(id,{address:address});
        return res.status(200).json({message:"Address updated successfully"});
    }
    catch(error){
        res.status(500).json({message:"Internal server error"});
    }
})

module.exports = router;