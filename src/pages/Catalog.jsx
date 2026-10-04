import React from 'react';
import { products } from '../data';
import { useAppContext } from '../context';
import { Plus } from 'lucide-react';

export default function Catalog() {
  const { addToCart } = useAppContext();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                <span className="text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</span>
              </div>
              <p className="mt-2 text-gray-600 flex-grow">{product.description}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full flex items-center justify-center bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
              >
                <Plus className="h-5 w-5 mr-2" /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
