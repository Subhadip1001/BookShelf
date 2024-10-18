import { books } from "../model/books.model.js";

export const takeBooks = async(req, res)=>{
    try {
        const findBook = await books.find();
        res.status(200).json(findBook)
    } catch (error) {
        console.log("ERROR : ", error);
        res.status(500).json(error);
    };
}