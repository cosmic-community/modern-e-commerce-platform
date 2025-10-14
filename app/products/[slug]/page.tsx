import { notFound } from 'next/navigation'
import ProductDetail from '@/components/ProductDetail'
import ProductReviews from '@/components/ProductReviews'
import RelatedProducts from '@/components/RelatedProducts'
import { getProductBySlug, getProductReviews, getProducts } from '@/lib/cosmic'
import { Product } from '@/types'

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  
  return products.map((product: Product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  
  if (!product) {
    notFound();
  }
  
  const reviews = await getProductReviews(product.id);
  
  return (
    <div className="min-h-screen py-12 px-4 max-w-7xl mx-auto">
      <ProductDetail product={product} />
      
      <div className="mt-16">
        <ProductReviews reviews={reviews} productName={product.title} />
      </div>
      
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-gradient">
          Related Products
        </h2>
        <RelatedProducts 
          categoryId={product.metadata.category?.id} 
          currentProductId={product.id} 
        />
      </div>
    </div>
  )
}