import { getPageBySlug } from '@/lib/cosmic'

export default async function FAQPage() {
  const page = await getPageBySlug('faq');
  
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
          {page?.metadata?.page_title || 'FAQ'}
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
                Find answers to commonly asked questions.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}