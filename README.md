# Modern E-Commerce Platform

A full-stack e-commerce application built with Next.js 15, TypeScript, and Cosmic CMS. Features advanced product filtering, shopping cart, animated UI, and real-time search.

![App Preview](https://imgix.cosmicjs.com/3384b6e0-a8e8-11f0-936e-dbe343b25d95-photo-1505740420928-5e560c06d30e-1760437564817.jpg?w=1200&h=300&fit=crop&auto=format,compress)

## Features

- ✨ **Modern UI/UX**: Sleek design with 3D animations and hover effects
- 🛍️ **Product Catalog**: Browse products with images, descriptions, and pricing
- 🔍 **Advanced Search**: Real-time product search with instant results
- 🏷️ **Smart Filtering**: Filter by categories, brands, tags, and price ranges
- 🛒 **Shopping Cart**: Full cart management with quantity updates
- ⭐ **Product Reviews**: Customer reviews with star ratings
- 🎁 **Promotions**: Dynamic promotional banners and discount codes
- 📱 **Responsive Design**: Perfect experience on all devices
- 🎨 **Animated Backgrounds**: Gradient animations and visual effects
- 💳 **Checkout Flow**: Complete checkout process with order summary

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68ed329f3393cb29a918567b&clone_repository=68ee26b59c329a49d870eb49)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "use e-commerce folder and built e-commerce website use fullstack domain or mern stack it will look like a real time web application and it will work with backend also and database store more data what ara the having in database search that product are anything it will take and come while add some animated desing for bacground and buttons then hover also click means it give 3D format animation again telling use e-commerce folder and all the files and folders will connect your self and show output page for me don't give any error for me all mistake solve and give output for this site"

### Code Generation Prompt

> "Based on the content model I created for "use e-commerce folder and built e-commerce website use fullstack domain or mern stack it will look like a real time web application and it will work with backend also and database store more data what ara the having in database search that product are anything it will take and come while add some animated desing for bacground and buttons then hover also click means it give 3D format animation again telling use e-commerce folder and all the files and folders will connect your self and show output page for me don't give any error for me all mistake solve and give output for this site", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic
- **Font**: Inter (Google Fonts)
- **Package Manager**: Bun
- **Animations**: CSS transforms and transitions

## Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Create a `.env.local` file with your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

### Fetching Products with Relationships
```typescript
// Fetch products with category, brand, and tags relationships
const response = await cosmic.objects
  .find({
    type: 'products',
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);

const products = response.objects;
```

### Searching Products
```typescript
// Search products by name or description
const response = await cosmic.objects
  .find({
    type: 'products',
    'metadata.product_name': {
      $regex: searchTerm,
      $options: 'i'
    }
  })
  .depth(1);
```

### Getting Site Settings
```typescript
// Fetch singleton site settings
const response = await cosmic.objects
  .findOne({
    type: 'site-settings',
    slug: 'site-settings'
  })
  .depth(0);

const settings = response.object;
```

## Cosmic CMS Integration

This application uses Cosmic as a headless CMS with the following content structure:

- **Products**: Main product catalog with pricing, images, and specifications
- **Categories**: Hierarchical product categorization
- **Brands**: Product brand information and logos
- **Tags**: Product tags for filtering and organization
- **Reviews**: Customer reviews with ratings
- **Promotions**: Promotional campaigns and discount codes
- **Pages**: Dynamic content pages (FAQ, Contact, etc.)
- **Site Settings**: Global site configuration

All content is managed through the Cosmic dashboard and fetched dynamically using the Cosmic SDK.

## Deployment Options

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Connect your repository
2. Add environment variables in Vercel dashboard
3. Deploy

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Connect your repository
2. Add environment variables in Netlify dashboard
3. Build command: `bun run build`
4. Publish directory: `.next`

### Environment Variables

Set these in your deployment platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

<!-- README_END -->