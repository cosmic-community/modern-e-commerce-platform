'use client'

import { useState } from 'react'
import { Product } from '@/types'

interface AddToCartButtonProps {
  product: Product;
  quantity: number;
}

export default function AddToCartButton({ product, quantity }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Simulate adding to cart
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setIsAdding(false);
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };
  
  return (
    <div className="space-y-3">
      <button
        onClick={handleAddToCart}
        disabled={isAdding || product.metadata.stock_quantity === 0}
        className={`btn-3d w-full py-4 rounded-lg font-semibold text-lg transition-all ${
          product.metadata.stock_quantity === 0
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-primary-600 text-white hover:bg-primary-700'
        }`}
      >
        {isAdding ? 'Adding...' : product.metadata.stock_quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>
      
      {showSuccess && (
        <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg text-center animate-fade-in">
          ✓ Added to cart successfully!
        </div>
      )}
    </div>
  )
}