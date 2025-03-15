import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`DataBase connected. `);
  } catch (error) {
    console.error(`DB connection error: ${error} `);
    process.exit(1);
  }
};

export default Connection;
