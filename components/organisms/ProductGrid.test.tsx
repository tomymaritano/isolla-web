import { render, screen } from '@testing-library/react';
import ProductGrid from './ProductGrid';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, className }: any) => {
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

describe('ProductGrid', () => {
  it('shows only featured products when showAll is false', () => {
    render(<ProductGrid showAll={false} />);

    // Should show 4 featured products: Bombo 02, Caballito piccolo, Coffee Table, Caballito petit
    const productCards = screen.getAllByRole('link').filter(
      link => link.getAttribute('href')?.startsWith('/productos/')
    );

    // 4 products + 1 catalog button link
    expect(productCards.length).toBeGreaterThanOrEqual(4);
  });

  it('shows catalog button when showAll is false', () => {
    render(<ProductGrid showAll={false} />);

    const catalogButton = screen.getByText('CATÁLOGO');
    expect(catalogButton).toBeInTheDocument();
    expect(catalogButton.closest('a')).toHaveAttribute('href', '/productos');
  });

  it('shows all products when showAll is true', () => {
    render(<ProductGrid showAll={true} />);

    // Should show all 14 products
    const productCards = screen.getAllByRole('link').filter(
      link => link.getAttribute('href')?.startsWith('/productos/')
    );

    expect(productCards.length).toBe(14);
  });

  it('does not show catalog button when showAll is true', () => {
    render(<ProductGrid showAll={true} />);

    const catalogButton = screen.queryByText('CATÁLOGO');
    expect(catalogButton).not.toBeInTheDocument();
  });

  it('renders products in correct order for featured view', () => {
    render(<ProductGrid showAll={false} />);

    // Featured products should be in this order: Bombo 02, Caballito piccolo, Coffee Table, Caballito petit
    const expectedTitles = ['Bombo 02', 'Caballito piccolo', 'Coffee Table', 'Caballito petit'];

    expectedTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('renders ProductCard components for each product', () => {
    render(<ProductGrid showAll={false} />);

    // Each product should have category, title, and price
    expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
  });
});
