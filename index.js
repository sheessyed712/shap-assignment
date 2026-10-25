import express from "express";
import customMiddleware from "./middlewares/customMiddlewares";

const app=express();

app.get("/welcome",customMiddleware,(req,res)=>{
    res.send(`<h1>Welcome ,${req.user}! </h1>`)
})



const PORT =3000;
app.listen(PORT,()=>{
    console.log("server is running on port 3000")
})