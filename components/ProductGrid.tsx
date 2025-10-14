'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'
import { Product } from '@/types'

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [sortBy, setSortBy] = useState('featured');
  
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return (a.metadata.sale_price || a.metadata.price) - (b.metadata.sale_price || b.metadata.price);
      case 'price-high':
        return (b.metadata.sale_price || b.metadata.price) - (a.metadata.sale_price || a.metadata.price);
      case 'name':
        return a.metadata.product_name.localeCompare(b.metadata.product_name);
      default:
        return 0;
    }
  });
  
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No products found</p>
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-600">
          Showing {products.length} product{products.length !== 1 ? 's' : ''}
        </p>
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}