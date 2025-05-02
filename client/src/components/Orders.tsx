import React, { useState, useEffect } from "react";
import { Order } from "../types";

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/orders/orderhistory"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch orders");
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <section
        className="h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/orderHistory-banner.jpg')",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative text-center text-white z-10">
          <h2 className="text-4xl font-bold mb-4">Your Order History</h2>
          <p className="text-xl italic">
            "Every order tells a story of flavors and memories"
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
        {orders.length === 0 ? (
          <div className="text-center text-gray-500">
            <p>No orders found</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Order #{order._id}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="font-semibold">₹{order.total}</p>
                </div>
                <div className="space-y-2">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <span>{item.name}</span>
                      <span className="text-gray-600">
                        {item.quantity} x ₹{item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Orders;
