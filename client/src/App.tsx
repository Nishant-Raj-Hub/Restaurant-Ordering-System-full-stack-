import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./components/OrderConfirmation";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import { Order } from "./types";
import "./index.css";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderPlaced = async (orderData: Order) => {
    setCurrentOrder(orderData);
    console.log(orderData);

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to place order");
      }

      setIsCheckoutOpen(false);
      setIsConfirmationOpen(true);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header openCart={handleOpenCart} />

          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Menu />
                  </>
                }
              />
              <Route path="/orders" element={<Orders />} />
            </Routes>

            <Cart
              isOpen={isCartOpen}
              onClose={handleCloseCart}
              onCheckout={handleCheckout}
            />
            <Checkout
              isOpen={isCheckoutOpen}
              onClose={() => setIsCheckoutOpen(false)}
              onOrderPlaced={handleOrderPlaced}
            />
            {currentOrder && (
              <OrderConfirmation
                order={currentOrder}
                isOpen={isConfirmationOpen}
                onClose={() => setIsConfirmationOpen(false)}
              />
            )}
          </main>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
