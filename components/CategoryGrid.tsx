import Link from 'next/link'
import { getCategories } from '@/lib/cosmic'
import { Category } from '@/types'

export default async function CategoryGrid() {
  const categories = await getCategories();
  
  if (!categories || categories.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No categories available</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category: Category) => (
        <Link
          key={category.id}
          href={`/categories/${category.slug}`}
          className="group relative h-64 rounded-xl overflow-hidden shadow-lg card-hover"
        >
          {category.metadata.category_image ? (
            <img
              src={`${category.metadata.category_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
              alt={category.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600" />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 w-full">
              <h3 className="text-2xl font-bold text-white mb-2">
                {category.metadata.category_name}
              </h3>
              {category.metadata.description && (
                <p className="text-white/90 text-sm line-clamp-2">
                  {category.metadata.description}
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}