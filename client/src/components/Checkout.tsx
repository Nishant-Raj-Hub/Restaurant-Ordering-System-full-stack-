import React from 'react';
import { useCart } from '../context/CartContext';
import { Order } from '../types';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderPlaced: (orderData: Order) => void;
}

const Checkout: React.FC<CheckoutProps> = ({
  isOpen,
  onClose,
  onOrderPlaced,
}) => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handlePlaceOrder = () => {
    const orderData: Order = {
      items: state.items,
      total: state.total,
      createdAt: new Date(),
      user: {
        name: 'John Doe',
        phone: '555-0123',
      },
      paymentMethod: 'card'
    };

    onOrderPlaced(orderData);
    dispatch({ type: 'CLEAR_CART' });
    navigate('/');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="fixed inset-0 bg-black/70" onClick={onClose} />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative bg-white rounded-lg p-6 max-w-md w-full"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Order Confirmation</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-4 mb-6">
            <div className="border-t border-b py-4">
              {state.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-2"
                >
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center font-semibold">
              <span>Total</span>
              <span>${state.total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-colors"
          >
            Place Order
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;