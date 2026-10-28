import express from "express";

const router=express.Router();

router.get("/:userId",(req,res)=>{
    const userId=req.params.id;

    res.send(` fetching cart with userId:${userId}`)
})

router.post("/:userId",(req,res)=>{
    const userId=req.params.id;
    res.send(`adding product to the cart with the ID:${userId}`)
})
export default router;
