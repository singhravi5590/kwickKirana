import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/database.js';
import useRouter from './routes/user.route.js';

dotenv.config();
const app = express();

app.use(express.json());
// app.use(cors({
//     credentials : true,
//     origin : process.env.FRONTEND_URL
// }))
app.use(cors());

app.use(cookieParser());
app.use(morgan());
app.use(helmet({
    crossOriginResourcePolicy : false,
}));

app.get("/", (req, res) => {
    res.json({
        message : 'Server is running on ' + PORT,
    })
})

app.use("/api/user", useRouter);

const PORT = 8080 || process.env.PORT;

connectDB().then(() => {
    console.log("Database is connected successfully");
    app.listen(PORT, () => {
        console.log(`Server is running on port number ${PORT}`)
    })
})
