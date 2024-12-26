import express from "express";
import {
  getProducts,
  addProducts,
  updateProduct,
  deleteProduct,
} from "../controller/productController";

const productRouter = express.Router();

productRouter.post("/addproducts", addProducts);

productRouter.get("/getproducts", getProducts);

productRouter.patch("/updateproduct/:requestId", updateProduct);

productRouter.delete("/deleteProduct", deleteProduct);

export default productRouter;
