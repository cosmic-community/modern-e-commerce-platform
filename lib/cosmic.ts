import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper for handling Cosmic SDK errors
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Product queries
export async function getProducts() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'products',
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch products');
  }
}

export async function getFeaturedProducts() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'products',
        'metadata.featured_product': true,
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch featured products');
  }
}

export async function getProductBySlug(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'products',
        slug,
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch product');
  }
}

// Category queries
export async function getCategories() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'categories',
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch categories');
  }
}

// Brand queries
export async function getBrands() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'brands',
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(0);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch brands');
  }
}

// Tag queries
export async function getTags() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'tags',
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(0);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch tags');
  }
}

// Review queries
export async function getProductReviews(productId: string) {
  try {
    const response = await cosmic.objects
      .find({
        type: 'reviews',
        'metadata.product': productId,
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch reviews');
  }
}

// Promotion queries
export async function getActivePromotions() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'promotions',
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(0);
    
    const now = new Date();
    return response.objects.filter((promo: any) => {
      const startDate = new Date(promo.metadata.start_date);
      const endDate = new Date(promo.metadata.end_date);
      return now >= startDate && now <= endDate;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch promotions');
  }
}

// Page queries
export async function getPageBySlug(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'pages',
        slug,
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(0);
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch page');
  }
}

// Site settings query
export async function getSiteSettings() {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'site-settings',
        slug: 'site-settings',
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(0);
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch site settings');
  }
}