'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  // If only one image, show it without thumbnails
  if (images.length === 1) {
    return (
      <div className="relative h-full w-full">
        <Image
          src={images[0]}
          alt={productName}
          fill
          className="object-cover"
          priority
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full gap-2">
      {/* Main Image */}
      <div className="relative flex-1 min-h-0 w-full">
        <Image
          src={images[selectedImage]}
          alt={`${productName} - Image ${selectedImage + 1}`}
          fill
          className="object-cover"
          priority={selectedImage === 0}
        />
      </div>

      {/* Thumbnails */}
      <div
        className="flex gap-2 overflow-x-auto px-2 pb-2 thumbnail-scrollbar"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#4b5563 #e5e7eb'
        }}
      >
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border-2 transition-all ${
              selectedImage === index
                ? 'border-black'
                : 'border-gray-200 hover:border-gray-400'
            }`}
          >
            <Image
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 64px, 80px"
            />
          </button>
        ))}
      </div>

      <style jsx>{`
        .thumbnail-scrollbar::-webkit-scrollbar {
          height: 8px;
        }

        .thumbnail-scrollbar::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 4px;
        }

        .thumbnail-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 4px;
        }

        .thumbnail-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #374151;
        }
      `}</style>
    </div>
  );
}
