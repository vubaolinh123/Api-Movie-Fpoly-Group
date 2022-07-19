import express from "express"
import cors from 'cors';
import morgan from "morgan"
import mongoose from "mongoose"
import { MongoClient } from "mongodb";
import productRouter from "./routes/product"

const app = express();

// middleware
app.use(cors());
app.use(morgan("tiny"))
app.use(express.json());


// Router
app.use("/api", productRouter);


const url = "mongodb+srv://nodejsgroup8:nodejsgroup8@cluster0.btydm.mongodb.net/NodeJS?retryWrites=true&w=majority"
const mongo = new MongoClient(url, { useNewUrlParser: true });

// connect db
mongo.connect("")
    .then(() => {
        console.log("Kết nối DB thành công");
    })
    .catch(err => console.log(err))

app.listen(process.env.PORT || 3001, () => {
    console.log("Server của bạn đang chạy");
})