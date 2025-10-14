import Link from 'next/link'
import { getSiteSettings } from '@/lib/cosmic'

export default async function Footer() {
  const settings = await getSiteSettings();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              {settings?.metadata?.site_name || 'E-Commerce'}
            </h3>
            {settings?.metadata?.address && (
              <p className="text-gray-400 text-sm whitespace-pre-line">
                {settings.metadata.address}
              </p>
            )}
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories/electronics" className="text-gray-400 hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/categories/fashion" className="text-gray-400 hover:text-white transition-colors">
                  Fashion
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            {settings?.metadata?.contact_email && (
              <p className="text-gray-400 text-sm mb-2">
                Email: {settings.metadata.contact_email}
              </p>
            )}
            {settings?.metadata?.contact_phone && (
              <p className="text-gray-400 text-sm mb-4">
                Phone: {settings.metadata.contact_phone}
              </p>
            )}
            {settings?.metadata?.social_media_links && (
              <div className="flex space-x-4">
                {settings.metadata.social_media_links.facebook && (
                  <a
                    href={settings.metadata.social_media_links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Facebook
                  </a>
                )}
                {settings.metadata.social_media_links.instagram && (
                  <a
                    href={settings.metadata.social_media_links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} {settings?.metadata?.site_name || 'E-Commerce Platform'}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}