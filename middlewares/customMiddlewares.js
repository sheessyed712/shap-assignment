function customMiddleware(req,res,next){
    req.user="Guest";
    next();
}

export default customMiddleware;
