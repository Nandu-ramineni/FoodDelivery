import mongoose from "mongoose";

const Connection = async(URI) => {
    try {
        await mongoose.connect(URI)
        console.log('Database connected successfully');
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

export default Connection;