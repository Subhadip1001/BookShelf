import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from "cors";
import bookRoute from './Router/books.router.js';
import userRoute from './Router/user.router.js';


const app = express()
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 4002;
const database = process.env.MongoDBURI;
app.use(cors());

try {
    mongoose.connect(database);
    console.log("Batabase was connected");
} catch (error) {
    console.log(`ERROR: ${error}`);
}

app.use("/books", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})