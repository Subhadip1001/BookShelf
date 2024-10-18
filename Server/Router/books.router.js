import express from "express";
import { takeBooks } from "../controller/books.controller.js";

const router = express.Router();

router.get("/", takeBooks);

export default router;