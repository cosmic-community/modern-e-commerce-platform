import { notFound } from 'next/navigation'
import ProductGrid from '@/components/ProductGrid'
import { getProducts, getCategories } from '@/lib/cosmic'
import { Category, Product } from '@/types'

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = await getCategories();
  
  return categories.map((category: Category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);
  
  const category = categories.find((cat: Category) => cat.slug === slug);
  
  if (!category) {
    notFound();
  }
  
  const categoryProducts = products.filter((product: Product) => 
    product.metadata.category?.slug === slug
  );
  
  return (
    <div className="min-h-screen py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        {category.metadata.category_image && (
          <img
            src={`${category.metadata.category_image.imgix_url}?w=1200&h=300&fit=crop&auto=format,compress`}
            alt={category.title}
            className="w-full h-64 object-cover rounded-xl mb-8"
          />
        )}
        <h1 className="text-5xl font-bold mb-4 text-gradient">
          {category.metadata.category_name}
        </h1>
        {category.metadata.description && (
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {category.metadata.description}
          </p>
        )}
      </div>
      
      <ProductGrid products={categoryProducts} />
    </div>
  )
}