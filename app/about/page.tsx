import { getSiteSettings } from '@/lib/cosmic'

export default async function AboutPage() {
  const settings = await getSiteSettings();
  
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gradient">
          About {settings?.metadata?.site_name || 'Us'}
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to our modern e-commerce platform, where innovation meets exceptional shopping experiences. 
            We've built a cutting-edge online marketplace that combines the latest technology with user-friendly design 
            to make your shopping journey seamless and enjoyable.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our platform features advanced product search, intelligent filtering, and a beautiful interface that 
            works perfectly on all devices. Whether you're browsing on your phone, tablet, or desktop, you'll 
            enjoy the same smooth, responsive experience.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We're committed to providing quality products, excellent customer service, and a shopping experience 
            that exceeds your expectations. Thank you for choosing us as your trusted online shopping destination.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
            <p className="text-gray-600">Products</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">5</div>
            <p className="text-gray-600">Categories</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
            <p className="text-gray-600">Support</p>
          </div>
        </div>
        
        {settings?.metadata?.contact_email && (
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl p-8 mt-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-4">Have questions? We'd love to hear from you!</p>
            <a
              href={`mailto:${settings.metadata.contact_email}`}
              className="inline-block btn-3d bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </div>
  )
}