import ProductGrid from '@/components/ProductGrid'
import ProductFilters from '@/components/ProductFilters'
import { getProducts, getCategories, getBrands, getTags } from '@/lib/cosmic'

export default async function ProductsPage() {
  const [products, categories, brands, tags] = await Promise.all([
    getProducts(),
    getCategories(),
    getBrands(),
    getTags(),
  ]);
  
  return (
    <div className="min-h-screen py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-12 text-gradient">
        All Products
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <ProductFilters 
            categories={categories}
            brands={brands}
            tags={tags}
          />
        </aside>
        
        <div className="lg:col-span-3">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  )
}