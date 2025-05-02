import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import testRoute from "./routes/test"; 
import menuRoutes from "./routes/menu.routes";
import orderRoutes from "./routes/order.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI!;

app.use(cors());
app.use(express.json());

// Test Route
app.use("/", testRoute); 
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);


// Connect to MongoDB and start server
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
