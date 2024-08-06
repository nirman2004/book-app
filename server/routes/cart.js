const { Express } = require("express");
const router = require("express").Router();
const User = require("../models/user");
const {authenticateToken} = require("./userAuth");

//put book to cart
router.put("/add-to-cart", authenticateToken,async(req,res)=>{
    try{
        const{bookid,id} =req.headers;
        const userData = await User.findById(id);
        const isBookinCart =userData.cart.includes(bookid);
        if(isBookinCart){
            return response.status(200).json({message:"Book already in cart"})
        }
        await User.findById(id,{$push:{cart:bookid}})
        return response.status(200).json({message:"Book added to cart"})
    }
    catch(error){
        return res.status(500).json({message:"An error occured"});   
    }
});

router.put("/remove-from-cart/:bookid",authenticateToken,async(req,res)=>{
    try{
        const {bookid} =req.params;
        const {id} = req.headers;
        await User.findByIdAndUpdate(id,{$pull:{cart:bookid},});
        
          return response.status(200).json({message:"Book removed from the cart"})
    }
    catch(error){
    return res.status(500).json({message:"An error occured"});
    }
});

router.get("/get-user-cart", authenticateToken, async(req,res)=>{
    try{
        const {id} = req.headers;
        const userData = await User.findById(id).populate("cart");
        const cart = userData.cart.reverse();
        return res.json({
            status:"success",
            data: cart,
        });
    }
    catch(error){
        return res.status(500).json({message:"An error occured"});   
    }
});



module.exports = router;