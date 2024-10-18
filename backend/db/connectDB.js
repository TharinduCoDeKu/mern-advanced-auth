import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        console.log("mongo uri: ", process.env.MONGO_URI);
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1); // 1 is failure to exit
    }
}