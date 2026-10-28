export const getCartForUser=(req,res)=>{
    const userId=req.params.userId;

    res.send(` fetching cart with userId:${userId}`)
}
export const addProductToCart=(req,res)=>{
    const userId=req.params.id;
    res.send(`adding product to the cart with the ID:${userId}`)  
}
