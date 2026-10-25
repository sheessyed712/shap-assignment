
import express from "express";
import customMiddleware from "./middlewares/customMiddlewares.js";

const app = express();

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

export default app;
