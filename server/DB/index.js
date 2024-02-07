import mongoose from "mongoose";

const connectDB = ()=>{
try {
    const connectionInstration=mongoose.connect(process.env.MONGO_URL)
    console.log(`conneed to successfull ${connectionInstration} `);
} catch (error) {
    console.log(`something went wrong in connectiong Db`);
}
}
export default connectDB