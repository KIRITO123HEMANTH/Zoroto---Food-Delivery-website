import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kirito_04:8978456470@kirito04.fai0s.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}