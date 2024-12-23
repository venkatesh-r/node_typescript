import express, { Request, Response, Application } from "express";
const bodyParser = require("body-parser");
import connectDB from "./config/database";
import Product from "./models/products";

const app: Application = express();

//Middleware parse JSON
app.use(bodyParser.json());

app.post("/addproducts", async (req: Request, res: Response) => {
  try {
    const { name, quantity, price, image } = req.body;

    const productsList = new Product({
      name: name,
      quantity: quantity,
      price: price,
      image: image,
    });

    const addedProducts = await productsList.save();
    res.send("Product added sucessfully" + addedProducts);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send("ERROR::" + error.message);
    } else {
      res.status(404).send("ERROR: An unknown error occured");
    }
  }
});

app.get("/getproducts", async (req: Request, res: Response) => {
  try {
    const data = await Product.find({});
    res.json({ message: data });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send("ERROR::" + error.message);
    } else {
      res.status(404).send("ERROR: An unknown error occured");
    }
  }
});

app.patch("/updateproduct", async (req: Request, res: Response) => {
  try {
    const productId = req.params;
    const updatedProduct = req.body;
    const updatedList = await Product.updateOne(
      { _id: productId },
      updatedProduct
    );
    res.json({ message: updatedList });
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
