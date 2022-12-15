import express from "express"
import cors from 'cors';
import morgan from "morgan"
import mongoose from "mongoose"
import { MongoClient } from "mongodb";
import productRouter from "./routes/product"
import userRouter from "./routes/auth"
import favoritelistRouter from "./routes/favoritemovie"
import commentRouter from "./routes/comment";




const app = express();

app.use(cors({
    origin: 'https://movie.linkcualinh.com',
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



const mongoAtlasUri = "mongodb+srv://nodejsgroup8:nodejsgroup8@cluster0.btydm.mongodb.net/NodeJS?retryWrites=true&w=majority";

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


app.listen(process.env.PORT || 3001, () => {
    console.log("Server của bạn đang chạy");
})