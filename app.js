
import express from "express";
import customMiddleware from "./middlewares/customMiddlewares.js";

const app = express();

//middleware for logging
app.use((req,res,next)=>{
    console.log(`${req.method} request made to ${req.url}`);
    next();
})
//e commerce assignment
app.get("/products",(req,res)=>{
    res.send("Here is the list of all products.")
})

app.post("/products",(req,res)=>{
    res.send("A new product has been added.")
})

app.get("/categories",(req,res)=>{
    res.send("Here is the list of all categories.")
})
app.post("/categories",(req,res)=>{
    res.send("A new category has been created.")
})

app.get("/welcome", customMiddleware, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.get("/orders", (req, res) => {
    res.send("<h1>Here is the list of all orders.</h1>");
});

app.post("/orders", (req, res) => {
    res.send("<h1>A new order has been created.</h1>");
});

app.get("/users", (req, res) => {
    res.send("<h1>Here is the list of all the users.</h1>");
});

app.post("/users", (req, res) => {
    res.send("<h1>A new user has been added.</h1>");
});

app.use((req,res)=>{
    res.status(404).send(`<h1>404-Page Not Found</h1>`);
})
app.get("/welcome/:username",(req,res)=>{
    const username=req.params.username;
    const role=req.query.role;
    res.send(`<h1>Welcome ${username},your role is ${role}</h1>`)
})
export default app;
