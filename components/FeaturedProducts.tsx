import { getFeaturedProducts } from '@/lib/cosmic'
import ProductCard from './ProductCard'
import { Product } from '@/types'

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts();
  
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No featured products available</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}