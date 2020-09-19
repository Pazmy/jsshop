import express from "express";
import userModel from "../models/userModel";
import expressAsyncHandler from "express-async-handler";
import { generateToken } from "../utils";

const userRouter = express.Router();

userRouter.get(
  "/createadmin",
  expressAsyncHandler(async (req, res) => {
    try {
      const user = new userModel({
        name: "pazmy",
        email: "pazmy@gmail.com",
        password: "pazmy123",
        isAdmin: true,
      });
      const createUser = await user.save();
      res.send(createUser);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  })
);
userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const signInUser = await userModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!signInUser) {
      res.status(401).send({
        message: "Invalid Email or Password",
      });
    } else {
      res.send({
        _id: signInUser.id,
        name: signInUser.name,
        email: signInUser.email,
        isAdmin: signInUser.isAdmin,
        token: generateToken(signInUser),
      });
    }
  })
);
userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const user = new userModel({
      name: req.body.name,
      email: req.body.name,
      password: req.body.password,
    });
    const createdUser = await user.save();
    if (!createdUser) {
      res.status(401).send({
        message: "Invalid User Data",
      });
    } else {
      res.send({
        _id: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser),
      });
    }
  })
);
export default userRouter;
