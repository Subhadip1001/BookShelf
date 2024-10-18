import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    title: String,
    price: Number,
    catagory: String,
    new: Boolean,
    img: String
});

export const books = mongoose.model("books", bookSchema);