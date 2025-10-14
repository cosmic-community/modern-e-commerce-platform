import Link from 'next/link'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.metadata.sale_price && product.metadata.sale_price < product.metadata.price;
  const discountPercent = hasDiscount 
    ? Math.round(((product.metadata.price - (product.metadata.sale_price || 0)) / product.metadata.price) * 100)
    : 0;
  
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="relative product-card group">
        {hasDiscount && (
          <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            {discountPercent}% OFF
          </div>
        )}
        
        <div className="relative h-64 overflow-hidden">
          <img
            src={`${product.metadata.featured_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        <div className="p-6">
          {product.metadata.brand && (
            <p className="text-sm text-gray-500 mb-2">
              {product.metadata.brand.metadata.brand_name}
            </p>
          )}
          
          <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {product.metadata.product_name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.metadata.short_description}
          </p>
          
          <div className="flex items-center justify-between">
            <div>
              {hasDiscount ? (
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-primary-600">
                    ${product.metadata.sale_price?.toFixed(2)}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    ${product.metadata.price.toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-gray-900">
                  ${product.metadata.price.toFixed(2)}
                </span>
              )}
            </div>
            
            {product.metadata.stock_quantity > 0 ? (
              <span className="text-sm text-green-600 font-medium">
                In Stock
              </span>
            ) : (
              <span className="text-sm text-red-600 font-medium">
                Out of Stock
              </span>
            )}
          </div>
          
          {product.metadata.tags && product.metadata.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {product.metadata.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag.id}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                >
                  {tag.metadata.tag_name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}