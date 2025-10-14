import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-bg min-h-[600px] flex items-center">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Welcome to Modern Shopping
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Discover amazing products with cutting-edge technology and beautiful design
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link
            href="/products"
            className="btn-3d px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all"
          >
            Shop Now
          </Link>
          <Link
            href="/categories/electronics"
            className="btn-3d px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
          >
            Browse Categories
          </Link>
        </div>
      </div>
    </section>
  )
}