import express from "express";
const router=express.Router();



router.get("/products",(req,res)=>{
    res.send("A list of all the products");
})

router.post("/products",(req,res)=>{
    res.send("A new product has been created");
})

router.get("/:id",(req,res)=>{
    const id =req.params.id;
    res.send(`fetching product with id :${id}`);
    
})
export default router;