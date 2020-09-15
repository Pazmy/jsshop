import express from "express";
import userModel from "../models/userModel";

const userRouter = express.Router();
userRouter.get("/createadmin", async (req, res) => {
  try {
    const user = new userModel({
      name: "admin",
      email: "admin@gmail.com",
      password: "admin",
    });
    const createUser = await user.save();
    res.send(createUser);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
export default userRouter;
