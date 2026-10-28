import express from "express";
const router=express.Router();
import {
    getAllproducts,
    getProductById,
    Addproduct

} from "../controllers/productController.js";



router.get("/products",getAllproducts);

router.post("/products",Addproduct)

router.get("/:id",getProductById);


export default router;