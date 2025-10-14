'use client'

import { useState } from 'react'
import { Category, Brand, Tag } from '@/types'

interface ProductFiltersProps {
  categories: Category[];
  brands: Brand[];
  tags: Tag[];
}

export default function ProductFilters({ categories, brands, tags }: ProductFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  
  const toggleBrand = (brandId: string) => {
    setSelectedBrands(prev =>
      prev.includes(brandId)
        ? prev.filter(id => id !== brandId)
        : [...prev, brandId]
    );
  };
  
  const toggleTag = (tagId: string) => {
    setSelectedTags(prev =>
      prev.includes(tagId)
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
      <h3 className="text-xl font-bold mb-6">Filters</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold mb-3">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-100 text-primary-700 font-medium'
                    : 'hover:bg-gray-100'
                }`}
              >
                {category.metadata.category_name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="border-t pt-6">
          <h4 className="font-semibold mb-3">Brands</h4>
          <div className="space-y-2">
            {brands.map((brand) => (
              <label key={brand.id} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.id)}
                  onChange={() => toggleBrand(brand.id)}
                  className="rounded text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm">{brand.metadata.brand_name}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="border-t pt-6">
          <h4 className="font-semibold mb-3">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => toggleTag(tag.id)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTags.includes(tag.id)
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag.metadata.tag_name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="border-t pt-6">
          <h4 className="font-semibold mb-3">Price Range</h4>
          <div className="space-y-4">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}