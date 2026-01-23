import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://shaheemmuhammed744_db_user:Shaheem744@cluster0.ynhbyjn.mongodb.net/?appName=Cluster0");
        
        console.log("MONGODB CONNECTED SUCCESSFULLY!");
    } catch (error) {
        console.error("Error connecting to MONGODB", error);
        process.exit(1);
    }
}