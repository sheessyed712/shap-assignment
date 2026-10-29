
import express from "express";
import customMiddleware from "./middlewares/customMiddlewares.js";
import productRoutes from "./routes/productRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

import studentRoutes from "./routes/studentRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";

import userRoutes from "./routes/userRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import path from "path";

const app = express();

// Parse JSON request bodies
app.use(express.json());

// Middleware for logging (must be before routes)
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

// Ecommerce startup
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to the student and course portal.");
});

// Connecting the student route
app.use("/students", studentRoutes);

// Connect course route
app.use("/courses", courseRoutes);

// Book routes
app.use("/", bookRoutes);

// Ecommerce assignment: categories
app.get("/categories", (req, res) => {
    res.send("Here is the list of all products.");
});

app.post("/categories", (req, res) => {
    res.send("A new category has been created.");
});

// Keep these existing product routes for now
app.get("/products", (req, res) => {
    res.send("Here is the list of all products.");
});

app.post("/products", (req, res) => {
    res.send("A new product has been added.");
});

// Custom middleware assignment
app.get("/welcome", customMiddleware, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

// Orders routes
app.get("/orders", (req, res) => {
    res.send("<h1>Here is the list of all orders.</h1>");
});

app.post("/orders", (req, res) => {
    res.send("<h1>A new order has been created.</h1>");
});

// Keep these existing user routes for now
app.get("/users", (req, res) => {
    res.send("<h1>Here is the list of all the users.</h1>");
});

app.post("/users", (req, res) => {
    res.send("<h1>A new user has been added.</h1>");
});

// Dynamic route parameter and query parameter
app.get("/welcome/:username", (req, res) => {
    const username = req.params.username;
    const role = req.query.role;

    res.send(`<h1>Welcome ${username}, your role is ${role}</h1>`);
});

// 404 handler MUST be last
app.use((req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.get("/api/products",(req,res)=>{
    res.sendFile(path.join(__dirname,"view","products.html"));
})

//assignment
app.get("/api/product",(req,res)=>{
    res.sendFile(path.join(__dirname,"view","product_form.html"));
})
export default app;
