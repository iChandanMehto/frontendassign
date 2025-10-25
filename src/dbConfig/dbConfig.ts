import mongoose from "mongoose";

export async function connect() {
  try {
    const uri = process.env.MONGODB_URI;
    console.log("Mongo URI:", uri); // <-- check if it's defined
    console.log("ENV file check:", process.env.MONGODB_URI);


    if (!uri) throw new Error("MONGODB_URI is not defined in .env.local");

    await mongoose.connect(uri); // <-- await is crucial
    console.log("MongoDB connected successfully");

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error, make sure MongoDB is running.", err);
      process.exit(1);
    });
  } catch (error: any) {
    console.error("Something went wrong while connecting to MongoDB:", error.message);
    process.exit(1);
  }
}
