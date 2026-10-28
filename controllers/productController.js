import { getAllProducts as getAllProductsService,
    getProductById as getProductByIdService,
    addProduct as addProductService
 } from "../services/productService.js";


export const getAllproducts=(req,res)=>{
    const message=getAllProductsService();
    res.send(message);
}

export const getProductById=(req,res)=>{
    const id=req.params.id;
    const message=getProductByIdService(id);
    res.send(message);
}

export const Addproduct=(req,res)=>{
    const message=addProductService();
    res.send(message);
}
