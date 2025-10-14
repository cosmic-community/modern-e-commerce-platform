import Link from 'next/link'
import SearchBar from './SearchBar'
import MobileMenu from './MobileMenu'
import { getSiteSettings } from '@/lib/cosmic'

export default async function Header() {
  const settings = await getSiteSettings();
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            {settings?.metadata?.site_logo ? (
              <img
                src={`${settings.metadata.site_logo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={settings.metadata.site_name || 'Logo'}
                className="h-12 w-12 rounded-lg"
              />
            ) : (
              <div className="h-12 w-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
            )}
            <span className="text-2xl font-bold text-gradient">
              {settings?.metadata?.site_name || 'E-Commerce'}
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Products
            </Link>
            <Link href="/categories/electronics" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              About
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <SearchBar />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}