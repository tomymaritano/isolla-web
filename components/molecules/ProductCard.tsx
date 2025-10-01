'use client';

import Link from 'next/link';
import Image from 'next/image';
import Typography from '@/components/atoms/Typography';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ProductCardProps {
  id: number;
  image: string;
  category: string;
  title: string;
  price: string;
}

export default function ProductCard({ id, image, category, title, price }: ProductCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref}>
      <Link
        href={`/productos/${id}`}
        className="group cursor-pointer block"
      >
        <div className={`w-full aspect-[4/5] bg-gray-200 mb-2 overflow-hidden transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <Image
            src={image}
            alt={title}
            width={445}
            height={550}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          />
        </div>
        <Typography variant="label" font="inter" className="mb-2">
          {category}
        </Typography>
        <Typography variant="h3" font="crimson" className="mb-2 leading-none text-[24px]">
          {title}
        </Typography>
        <Typography variant="body" font="crimson" color="secondary" className="leading-none">
          {price}
        </Typography>
      </Link>
    </div>
  );
}
