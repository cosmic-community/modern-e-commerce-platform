import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import CategoryGrid from '@/components/CategoryGrid'
import PromotionBanner from '@/components/PromotionBanner'
import { getActivePromotions } from '@/lib/cosmic'

export default async function Home() {
  const promotions = await getActivePromotions();
  
  return (
    <div className="animate-fade-in">
      <Hero />
      
      {promotions && promotions.length > 0 && (
        <PromotionBanner promotions={promotions} />
      )}
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Shop by Category
        </h2>
        <CategoryGrid />
      </section>
      
      <section className="py-16 px-4 max-w-7xl mx-auto bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Featured Products
        </h2>
        <FeaturedProducts />
      </section>
    </div>
  )
}