import express, { Request, Response, Application } from "express";
import connectDB from "./config/database";
import Product from "./models/products";

const app: Application = express();

app.post("/addproducts", async (req: Request, res: Response) => {
  try {
    const user = new Product({
      name: "soap",
      quantity: 2,
      price: 50,
      image: "",
    });
    const data = await user.save();
    res.send("Product added sucessfully" + data);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send("ERROR::" + error.message);
    } else {
      res.status(404).send("ERROR: An unknown error occured");
    }
  }
});

const PORT: number = 5000;

app.listen(PORT, () => console.log(`PORT is running on ${PORT}`));

connectDB().then(() => {
  console.log("Connected to DB");
});
