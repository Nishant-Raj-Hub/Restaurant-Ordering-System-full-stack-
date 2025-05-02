import { Request, Response } from "express";
import MenuItem from "../models/menu.model";

// GET all menu items
export const getMenuItems = async (_req: Request, res: Response) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Server error fetching menu" });
  }
};

// POST to seed menu items
export const seedMenuItems = async (_req: Request, res: Response) => {
  try {
    const { menuItems } = await import("../menuData");
    await MenuItem.insertMany(menuItems);
    res.status(201).json({ message: "Menu seeded successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to seed menu" });
  }
};
