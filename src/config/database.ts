import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://admin:admin123@cluster0.sog7g.mongodb.net/"
  );
};

export default connectDB;
