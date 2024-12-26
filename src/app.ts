import express, { Application } from "express";
const bodyParser = require("body-parser");
import connectDB from "./config/database";
import productRouter from "./routes/productRoutes";

const app: Application = express();

//Middleware parse JSON
app.use(bodyParser.json());

//Routes
app.use("/", productRouter);

const PORT: number = 5000;

app.listen(PORT, () => console.log(`PORT is running on ${PORT}`));

connectDB().then(() => {
  console.log("Connected to DB");
});
