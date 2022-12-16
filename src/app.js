import express from "express"
import cors from 'cors';
import morgan from "morgan"
import mongoose from "mongoose"
import { MongoClient } from "mongodb";
import productRouter from "./routes/product"
import userRouter from "./routes/auth"
import favoritelistRouter from "./routes/favoritemovie"
import commentRouter from "./routes/comment";
import dotenv from "dotenv"

dotenv.config()
// https://movie.linkcualinh.com

const app = express();

app.use(cors({
    origin: '*',
    methods: ['POST', 'PUT', 'DELETE','GET']
}));

// middleware
app.use(morgan("tiny"))
app.use(express.json());



// Router
app.use("/api", productRouter);
app.use("/api", userRouter);
app.use("/api", favoritelistRouter);
app.use("/api", commentRouter)



const mongoAtlasUri = process.env.CONNECT_MONGODB_ATLAT_URL;

try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoAtlasUri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log("Mongoose đã được kết nối")
    );
} catch (e) {
    console.log("Không thể kết nối");
}
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Kết nối thất bại ${err}`));
dbConnection.once("open", () => console.log("Kết nối thành công đến DB!"));

const PORT = 8080

app.listen(PORT, () => {
    console.log("Server của bạn đang chạy");
})