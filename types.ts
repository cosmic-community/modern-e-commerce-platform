// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  thumbnail?: string;
}

// Product interface
export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    product_name: string;
    short_description: string;
    long_description?: string;
    price: number;
    sale_price?: number | null;
    sku: string;
    stock_quantity: number;
    featured_image: {
      url: string;
      imgix_url: string;
    };
    product_gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    category: Category;
    tags?: Tag[];
    brand?: Brand;
    featured_product: boolean;
    product_specifications?: Record<string, any>;
  };
}

// Category interface
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    category_name: string;
    description?: string;
    category_image?: {
      url: string;
      imgix_url: string;
    };
    parent_category?: Category | null;
  };
}

// Brand interface
export interface Brand extends CosmicObject {
  type: 'brands';
  metadata: {
    brand_name: string;
    brand_logo?: {
      url: string;
      imgix_url: string;
    };
    description?: string;
  };
}

// Tag interface
export interface Tag extends CosmicObject {
  type: 'tags';
  metadata: {
    tag_name: string;
    description?: string;
  };
}

// Review interface
export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    product: Product;
    reviewer_name: string;
    rating: {
      key: string;
      value: string;
    };
    review_text: string;
    featured_review: boolean;
  };
}

// Promotion interface
export interface Promotion extends CosmicObject {
  type: 'promotions';
  metadata: {
    promotion_name: string;
    description?: string;
    discount_code: string;
    discount_type: {
      key: 'percentage' | 'fixed';
      value: string;
    };
    discount_value: number;
    start_date: string;
    end_date: string;
    banner_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Page interface
export interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    page_title: string;
    content: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Site Settings interface
export interface SiteSettings extends CosmicObject {
  type: 'site-settings';
  metadata: {
    site_name: string;
    site_logo?: {
      url: string;
      imgix_url: string;
    };
    contact_email: string;
    contact_phone?: string;
    address?: string;
    social_media_links?: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
      pinterest?: string;
    };
    payment_gateway_settings?: {
      stripe_enabled?: boolean;
      paypal_enabled?: boolean;
      apple_pay_enabled?: boolean;
      google_pay_enabled?: boolean;
    };
    shipping_information?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Cart item interface
export interface CartItem {
  product: Product;
  quantity: number;
}