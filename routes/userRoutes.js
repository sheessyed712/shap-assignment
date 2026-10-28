import express from "express";
import { getAllUsers,addUser,getUserById } from "../controllers/userController.js";

const router=express.Router();

router.get("/",getAllUsers)

router.post("/",addUser)
router.get("/:id",getUserById);

export default router;

