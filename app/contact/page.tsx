import { getPageBySlug } from '@/lib/cosmic'

export default async function ContactPage() {
  const page = await getPageBySlug('contact-us');
  
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {page?.metadata?.hero_image && (
          <img
            src={`${page.metadata.hero_image.imgix_url}?w=1200&h=300&fit=crop&auto=format,compress`}
            alt={page.metadata.page_title}
            className="w-full h-64 object-cover rounded-xl mb-8"
          />
        )}
        
        <h1 className="text-5xl font-bold text-center mb-12 text-gradient">
          {page?.metadata?.page_title || 'Contact Us'}
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {page?.metadata?.content ? (
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: page.metadata.content }}
            />
          ) : (
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                We'd love to hear from you! Whether you have questions about our products, 
                need assistance with an order, or just want to provide feedback, our team is here to help.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">support@example.com</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">1-800-123-4567</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}