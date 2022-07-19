import express from "express"
import cors from 'cors';
import morgan from "morgan"
import mongoose from "mongoose"


const app = express();

// middleware
app.use(cors());
app.use(morgan("tiny"))
app.use(express.json());


// connect db
mongoose.connect("mongodb://localhost:27017/we16310")
    .then(() => {
        console.log("Kết nối DB thành công");
    })
    .catch(err => console.log(err))

app.listen(process.env.PORT || 3001, () => {
    console.log("Server của bạn đang chạy");
})