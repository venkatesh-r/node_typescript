import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://admin:admin123@cluster0.sog7g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
};

export default connectDB;
