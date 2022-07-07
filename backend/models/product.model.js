import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  discription: { type: String, required: true, trim: true },
  price: { type: String, required: true, trim: true },
  imageUrl: { type: Boolean, required: true }
})

// Model
const ProductModel = mongoose.model("products", userSchema)

export default ProductModel