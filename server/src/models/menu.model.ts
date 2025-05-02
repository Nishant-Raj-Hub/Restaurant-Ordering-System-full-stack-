import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);
export default MenuItem;
