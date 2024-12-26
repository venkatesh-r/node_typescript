import { Request, Response } from "express";
import Product from "../models/products";

export const addProducts = async (req: Request, res: Response) => {
  try {
    const { name, quantity, price, image } = req.body;

    const productsList = new Product({
      name: name,
      quantity: quantity,
      price: price,
      image: image,
    });

    const addedProducts = await productsList.save();
    res.json({ title: "Product added sucessfully", message: addedProducts });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send("ERROR::" + error.message);
    } else {
      res.status(404).send("ERROR: An unknown error occured");
    }
  }
};

export const getProducts = async (req: Request, res: Response) => {
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
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params?.requestId;
    const updatedProduct = req.body;
    const updatedList = await Product.findOneAndUpdate(
      { _id: productId },
      updatedProduct,
      {
        runValidators: true,
      }
    );
    await res.json({ message: updatedList });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send("ERROR::" + error.message);
    } else {
      res.status(404).send("ERROR: An unknown error occured");
    }
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.body.id;
    const deletedProduct = await Product.findOneAndDelete({ _id: productId });
    res.json({ message: deletedProduct });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send("ERROR::" + error.message);
    } else {
      res.status(404).send("ERROR: An unknown error occured");
    }
  }
};
