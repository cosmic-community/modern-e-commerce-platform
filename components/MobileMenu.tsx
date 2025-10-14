'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4 space-y-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
          >
            Products
          </Link>
          <Link
            href="/categories/electronics"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
          >
            Categories
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
          >
            About
          </Link>
        </div>
      )}
    </div>
  )
}