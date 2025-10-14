'use client'

import { useState } from 'react'
import { Product } from '@/types'
import AddToCartButton from './AddToCartButton'

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(product.metadata.featured_image.imgix_url);
  const [quantity, setQuantity] = useState(1);
  
  const images = [
    product.metadata.featured_image,
    ...(product.metadata.product_gallery || [])
  ];
  
  const hasDiscount = product.metadata.sale_price && product.metadata.sale_price < product.metadata.price;
  const finalPrice = product.metadata.sale_price || product.metadata.price;
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <div className="mb-4 rounded-xl overflow-hidden shadow-lg">
          <img
            src={`${selectedImage}?w=1200&h=1200&fit=crop&auto=format,compress`}
            alt={product.title}
            className="w-full h-auto"
          />
        </div>
        
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image.imgix_url)}
                className={`rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === image.imgix_url
                    ? 'border-primary-500 shadow-lg'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <img
                  src={`${image.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                  alt={`${product.title} ${index + 1}`}
                  className="w-full h-auto"
                />
              </button>
            ))}
          </div>
        )}
      </div>
      
      <div>
        {product.metadata.brand && (
          <p className="text-primary-600 font-semibold mb-2">
            {product.metadata.brand.metadata.brand_name}
          </p>
        )}
        
        <h1 className="text-4xl font-bold mb-4">
          {product.metadata.product_name}
        </h1>
        
        <div className="flex items-center space-x-4 mb-6">
          {hasDiscount ? (
            <>
              <span className="text-4xl font-bold text-primary-600">
                ${product.metadata.sale_price?.toFixed(2)}
              </span>
              <span className="text-2xl text-gray-400 line-through">
                ${product.metadata.price.toFixed(2)}
              </span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {Math.round(((product.metadata.price - (product.metadata.sale_price || 0)) / product.metadata.price) * 100)}% OFF
              </span>
            </>
          ) : (
            <span className="text-4xl font-bold text-gray-900">
              ${product.metadata.price.toFixed(2)}
            </span>
          )}
        </div>
        
        <p className="text-gray-600 text-lg mb-6">
          {product.metadata.short_description}
        </p>
        
        {product.metadata.long_description && (
          <div
            className="prose max-w-none mb-6"
            dangerouslySetInnerHTML={{ __html: product.metadata.long_description }}
          />
        )}
        
        <div className="border-t border-b border-gray-200 py-6 mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <label className="font-semibold">Quantity:</label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="w-12 text-center font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.metadata.stock_quantity, quantity + 1))}
                className="w-10 h-10 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                disabled={quantity >= product.metadata.stock_quantity}
              >
                +
              </button>
            </div>
            <span className="text-sm text-gray-600">
              ({product.metadata.stock_quantity} available)
            </span>
          </div>
          
          <AddToCartButton product={product} quantity={quantity} />
        </div>
        
        {product.metadata.product_specifications && (
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Specifications</h3>
            <div className="space-y-2">
              {Object.entries(product.metadata.product_specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">{key}:</span>
                  <span className="text-gray-600">
                    {Array.isArray(value) ? value.join(', ') : String(value)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {product.metadata.tags && product.metadata.tags.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {product.metadata.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag.metadata.tag_name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}