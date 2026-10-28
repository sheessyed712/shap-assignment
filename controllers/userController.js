export const getAllUsers=(req,res)=>{
    res.send("fetching all users");
}

export const addUser=(req,res)=>{
    res.send("adding new user");
}
export const getUserById=(req,res)=>{
    const id=req.params.id;
    res.send(`fetching a user with id :${id}`);
}
