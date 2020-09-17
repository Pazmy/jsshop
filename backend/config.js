import dotenv from "dotenv";

dotenv.config();

export default {
  MONGODB_URL: process.env.MONGODB_URL, //AMBIL DARI .env
  JWT_SECRET: process.env.JWT_SECRET,
};
