import express, { Application } from "express";
import cors from "cors";
const bodyParser = require("body-parser");
import connectDB from "./config/database";
import productRouter from "./routes/productRoutes";

const app: Application = express();

//CORS
app.use(cors());

const corsOptions = {
  origin: "http://localhost:5000/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//Middleware parse JSON
app.use(bodyParser.json());

//Routes
app.use("/", productRouter);

const PORT: number = 5000;

app.listen(PORT, () => console.log(`PORT is running on ${PORT}`));

connectDB().then(() => {
  console.log("Connected to DB");
});
