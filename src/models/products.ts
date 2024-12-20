import { Schema, model, connect } from "mongoose";

interface IProduct {
  name: string;
  quantity: number;
  price: number;
  image: string;
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, "Please a product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ProductData = model<IProduct>("Product", productSchema);

export default ProductData;
