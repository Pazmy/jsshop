import express from "express";
import cors from "cors";
import data from "./data.js";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import config from "./config";
import orderRouter from "./routers/orderRouter.js";



mongoose
  .connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log(error));

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.get("/api/product/:id", (req, res) => {
  const product = data.products.find((x) => x._id == req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});
app.use((err, req, res, next) => {
  const status = err.name && err.name === "ValidationError" ? 400 : 500;
  res.status(status).send({ message: err.message });
});

app.listen(5000, () => console.log("server running ..."));
