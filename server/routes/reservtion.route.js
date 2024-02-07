import express from "express"
import bookResevation from "../controllers/reservation.js"
const router=express.Router()

router.route("/user",bookResevation)
// console.log(bookResevation);
export default router