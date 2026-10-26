import express from "express";

const router=express.Router();

router.get("/books",(req,res)=>{
    res.send("Here is the list all the books");
})

router.post("/books",(req,res)=>{
    console.log("Book data:",req.body);
    res.send("Book has been added");
})
export default router;

