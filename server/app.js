import express from "express"
import dotenv from 'dotenv'
import cors from "cors"
import connectDB from "./DB/index.js"
import {errorMiddleware} from "./middlewares/error.js"
import reservationRoute from "./routes/reservtion.route.js"

const app = express()

dotenv.config({
    path:"./.env"
})

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/v1/reservation",reservationRoute)
// console.log(reservationRoute);
connectDB()
app.use(errorMiddleware)
export default app