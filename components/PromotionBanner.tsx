'use client'

import { useState, useEffect } from 'react'
import { Promotion } from '@/types'

interface PromotionBannerProps {
  promotions: Promotion[];
}

export default function PromotionBanner({ promotions }: PromotionBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (promotions.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promotions.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [promotions.length]);
  
  if (!promotions || promotions.length === 0) {
    return null;
  }
  
  const promotion = promotions[currentIndex] ?? promotions[0];
  
  if (!promotion) {
    return null;
  }
  
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              {promotion.metadata.promotion_name}
            </h2>
            {promotion.metadata.description && (
              <p className="text-xl mb-6 text-white/90">
                {promotion.metadata.description}
              </p>
            )}
            <div className="flex items-center space-x-4">
              <div className="bg-white text-purple-700 px-6 py-3 rounded-lg font-bold text-lg">
                Code: {promotion.metadata.discount_code}
              </div>
              <div className="text-2xl font-bold">
                {promotion.metadata.discount_type.key === 'percentage' 
                  ? `${promotion.metadata.discount_value}% OFF`
                  : `$${promotion.metadata.discount_value} OFF`
                }
              </div>
            </div>
          </div>
          
          {promotion.metadata.banner_image && (
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src={`${promotion.metadata.banner_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                alt={promotion.metadata.promotion_name}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
        
        {promotions.length > 1 && (
          <div className="flex justify-center space-x-2 mt-8">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}