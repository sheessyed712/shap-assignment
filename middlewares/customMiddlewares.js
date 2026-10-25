function customMiddleware(req,res,next){
    req.user="Guest";
    next();
}

module.exports=customMiddleware;
