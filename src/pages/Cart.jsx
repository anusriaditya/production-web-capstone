import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowLeft } from 'lucide-react';
import { useAppContext } from '../context';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, user } = useAppContext();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
          <ArrowLeft className="h-5 w-5 mr-2" /> Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {cart.map(item => (
            <li key={item.id} className="p-6 flex flex-col sm:flex-row items-center">
              <img src={item.image} alt={item.name} className="h-24 w-24 object-cover rounded-md mb-4 sm:mb-0 sm:mr-6" />
              <div className="flex-grow flex flex-col sm:flex-row justify-between w-full">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                  <p className="mt-1 text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                
                <div className="mt-4 sm:mt-0 flex items-center justify-between sm:w-48">
                  <div className="flex items-center border rounded-md">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 text-gray-600 hover:text-indigo-600">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 font-medium">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 text-gray-600 hover:text-indigo-600">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-500 hover:text-red-700 ml-4">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        
        <div className="bg-gray-50 p-6 flex flex-col items-end">
          <div className="text-lg mb-4">
            <span className="font-medium text-gray-600">Subtotal:</span>
            <span className="ml-2 font-bold text-gray-900">${subtotal.toFixed(2)}</span>
          </div>
          
          {user ? (
            <button className="bg-indigo-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700 font-bold transition-colors">
              Proceed to Checkout
            </button>
          ) : (
            <Link to="/login" className="bg-gray-800 text-white py-3 px-8 rounded-md hover:bg-gray-900 font-bold transition-colors">
              Login to Checkout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
