import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Order } from '../types';
import { motion } from 'framer-motion';

interface OrderConfirmationProps {
  order: Order;
  isOpen: boolean;
  onClose: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ order, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="fixed inset-0 bg-black/70" onClick={onClose}></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="relative bg-white rounded-lg shadow-xl max-w-md w-full py-8 px-6 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle size={48} className="text-green-500" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your order has been received and is being prepared.
          </p>
          
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2 text-left">Order Summary</h3>
            <div className="max-h-36 overflow-y-auto">
              {order.items.map(item => (
                <div key={item.id} className="flex justify-between py-2 border-b border-gray-100">
                  <div className="flex">
                    <span className="text-gray-700">{item.quantity} x</span>
                    <span className="ml-2 text-gray-800">{item.name}</span>
                  </div>
                  <span className="text-gray-700">₹{(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-3 font-medium">
              <span>Total</span>
              <span>₹{order.total}</span>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-8 rounded-lg transition-colors"
            >
              Enjoy!
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderConfirmation