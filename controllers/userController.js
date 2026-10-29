import { sendResponse } from "../utils/sendResponse.js";

import ApiError from "../utils/ApiError.js";


export const getAllUsers=(req,res)=>{
    return sendResponse(res,200,"fetching all Users");

}

export const addUser=(req,res)=>{
    try {
        const {name}=req.body;
        if(!name || !name.trim()){
            throw new ApiError(400,"username is required");

        }
        return sendResponse(res,200,"fetching all Users")
    } catch (error) {
        next(error);
    }
}
export const getUserById=(req,res,next)=>{

    try {
       const id=req.params.id;
       if(id==="999"){
        throw new ApiError(404,"unable to fetch")
       } 
       return sendResponse(res,200,`fetching user with id:${id}`)
    } catch (error) {
        next(error);
    }
    
    res.send(`fetching a user with id :${id}`);
}
