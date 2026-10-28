import express from "express";
import {students} from "../data.js";

const router=express.Router();

router.get("/",(req,res)=>{
    const student=students.map(student=>student.name);

    res.send(`Students: ${student}`);
})

router.get("/:id",(req,res)=>{
    const id=Number(req.params.id);
    const stud=students.find(student=>student.id===id);

    if(!stud){
        return res.status(404).send("Student not found");
    }
    res.send(`Student: ${stud}`);
})

export default router;
