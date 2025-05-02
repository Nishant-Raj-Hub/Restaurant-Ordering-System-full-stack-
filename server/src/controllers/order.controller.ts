import { Request, Response } from "express";
import Order from "../models/order.model";

// POST new order
export const placeOrder = async (req: Request, res: Response) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to place order" });
  }
};

// GET order history by phone number
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};
