import express from "express"

import {courses} from "../data.js";

const router=express.Router();

router.get("/",(req,res)=>{
    const course=courses.map(course=>course.name).join(", ");
    res.send(`Courses: ${course}`);

})

router.get("/:id",(req,res)=>{
    const id=Number(req.params.id);

    const course=courses.find(course=>course.id===id);

    if(!course){
        return res.status(404).send("Course not found");

    }

    res.send(`Course:${course.name} description: ${course.description}`)
})
export default router;
