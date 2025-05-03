import React, { useState, useEffect } from "react";
import { Category } from "../types";
import MenuItem from "./MenuItem";

interface MenuItemType {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const categories: Category[] = [
  { id: "starters", name: "Starters" },
  { id: "main-courses", name: "Main Courses" },
  { id: "sides", name: "Sides" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" },
];

/**
 * Menu component that displays a filterable grid of menu items.
 * Uses data fetched from a backend API.
 * @note Due to free hosting, initial server startup may take up to 1 minute
 * @returns A section containing category filters and menu items grid
 */
const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("https://restaurant-ordering-system-full-stack.onrender.com/api/menu");
        const data = await response.json();
        setMenuItems(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching menu items:", error);
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-gray-600">Loading menu items...</div>
      </div>
    );
  }

  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Menu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of delicious options, from appetizers to
            desserts. All made with fresh ingredients and prepared with care.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-teal-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-teal-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Note  */}
        <div className="text-center mb-6">
          <p className="text-gray-600 text-2xl sm:text-3xl bg-amber-300 max-w-2xl mx-auto">
          NOTE: Due to free hosting, initial server startup may take up to 1 minute
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuItem
              key={item._id}
              item={{
                id: item._id, // Map _id to id
                ...item,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
