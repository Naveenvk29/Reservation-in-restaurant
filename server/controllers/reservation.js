
import ApiError from "../middlewares/error.js"
import {Reservation} from "../models/reservation.model.js"


const bookResevation= async(req,res)=>{
    const { firstName, lastName, email, date, time, phone } = req.body;
    if (!firstName || !lastName || !email || !date || !time || !phone) {
        return next (new ApiError("Plase fill full Resveration form !",400))
    }

    try {
        await Reservation.create({firstName, lastName, email, date, time, phone })
        res.status(201)
        .json({
            success:true,
            message:"Reservation Book Successfully"
        })
    } catch (error) {
        if(error.name===validationError){
            const validationError=Object.values(error.errors).map(err=>err.message)
            return next( new ApiError(validationError.json(","),400))
        }
    }
}

export default bookResevation