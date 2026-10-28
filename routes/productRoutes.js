import express from "express";
const router=express.Router();
import {
    getAllproducts,
    getProductById,
    Addproduct

} from "../controllers/productController.js";



router.get("/",getAllproducts);

router.post("/",Addproduct)

router.get("/:id",getProductById);


export default router;