export const getAllproducts=(req,res)=>{
    res.send("Fetching all products");
}

export const getProductById=(req,res)=>{
    const id=req.params.id;
    res.send(`Fetching product with id:${id}`)
}

export const Addproduct=(req,res)=>{
    res.send(`Adding new product`);
}
