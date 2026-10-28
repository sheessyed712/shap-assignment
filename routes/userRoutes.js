import express from "express";

const router=express.Router();

router.get("/",(req,res)=>{
    res.send("fetching all the users")
})

router.post("/",(req,res)=>{
    res.send("Adding a new user")
})
router.get("/:id",(req,res)=>{
    const id=req.params.id;
    res.send(`fetching a user with id :${id}`);

})
export default router;

