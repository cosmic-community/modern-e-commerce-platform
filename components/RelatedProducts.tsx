import { getProducts } from '@/lib/cosmic'
import ProductCard from './ProductCard'
import { Product } from '@/types'

interface RelatedProductsProps {
  categoryId?: string;
  currentProductId: string;
}

export default async function RelatedProducts({ categoryId, currentProductId }: RelatedProductsProps) {
  const allProducts = await getProducts();
  
  const relatedProducts = allProducts
    .filter((product: Product) => 
      product.id !== currentProductId &&
      product.metadata.category?.id === categoryId
    )
    .slice(0, 3);
  
  if (relatedProducts.length === 0) {
    return null;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {relatedProducts.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}