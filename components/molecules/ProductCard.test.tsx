import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => {
    return <a href={href} className={className}>{children}</a>;
  },
}));

// Mock useScrollAnimation hook
jest.mock('@/hooks/useScrollAnimation', () => ({
  useScrollAnimation: () => ({
    ref: { current: null },
    isVisible: true,
  }),
}));

describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    image: '/products/test/main.png',
    category: 'Mesas',
    title: 'Mesa de Centro',
    price: 'Desde: $1.000,00 USD',
  };

  it('renders product information correctly', () => {
    render(<ProductCard {...mockProduct} />);

    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.price)).toBeInTheDocument();
  });

  it('renders product image with correct alt text', () => {
    render(<ProductCard {...mockProduct} />);

    const image = screen.getByAltText(mockProduct.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProduct.image);
  });

  it('links to correct product detail page', () => {
    render(<ProductCard {...mockProduct} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/productos/${mockProduct.id}`);
  });

  it('applies correct styling classes', () => {
    render(<ProductCard {...mockProduct} />);

    const link = screen.getByRole('link');
    expect(link).toHaveClass('group', 'cursor-pointer', 'block');
  });
});
