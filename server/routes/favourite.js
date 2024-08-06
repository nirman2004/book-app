const router = require("express").Router();
const User = require("../models/user");
const {authenticateToken} = require("./userAuth");

// add book to favourite

router.put("/add-book-to-favourite", authenticateToken,async(req,res)=>{
    try{
        const{bookid,id} =req.headers;
        const userData = await User.findById(id);
        const isBookFavourite =userData.favourites.includes(bookid);
        if(isBookFavourite){
            return response.status(200).json({message:"Book already in favourite"})
        }
        await User.findById(id,{$push:{favourites:bookid}})
        return response.status(200).json({message:"Book added to favourite"})
    }
    catch(error){
        return res.status(500).json({message:"An error occured"});   
    }
});

router.put("/remove-book-from-favourite", authenticateToken,async(req,res)=>{
    try{
        const{bookid,id} =req.headers;
        const userData = await User.findById(id);
        const isBookFavourite =userData.favourites.includes(bookid);
        if(!isBookFavourite){
            return response.status(200).json({message:"Book is not in favourite"})
        }
        await User.findById(id,{$pull:{favourites:bookid}})
        return response.status(200).json({message:"Book removed from favourite"})
    }
    catch(error){
        return res.status(500).json({message:"An error occured"});   
    }
})

router.get("/get-favourite-books", authenticateToken, async(req,res)=>{
    try{
        const {id} = req.headers;
        const userData = await User.findById(id).populate("favourites");
        const favouriteBooks = userData.favourites;
        return res.json({
            status:"success",
            data: favouriteBooks,
        });
    }
    catch(error){
        return res.status(500).json({message:"An error occured"});   
    }
})


module.exports = router;