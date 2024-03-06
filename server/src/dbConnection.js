import mongoose from "mongoose";

// const MongodbURI =
//   "mongodb+srv://devarsh:devarsh123@cluster0.fnvqdm6.mongodb.net";
// const DBName = "olms";
// const DBName = "register";
// const DBName = "videotube";

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
  } catch (error) {
    console.log("MongoDB Connection error", error);
    process.exit(1);
  }
};

export default connectDB;
