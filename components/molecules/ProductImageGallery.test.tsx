import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductImageGallery from './ProductImageGallery';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe('ProductImageGallery', () => {
  const mockImages = [
    '/products/test/1.png',
    '/products/test/2.png',
    '/products/test/3.png',
  ];
  const productName = 'Test Product';

  it('renders nothing when images array is empty', () => {
    const { container } = render(
      <ProductImageGallery images={[]} productName={productName} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders single image without thumbnails', () => {
    render(
      <ProductImageGallery images={[mockImages[0]]} productName={productName} />
    );

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(1);
    expect(images[0]).toHaveAttribute('alt', productName);
  });

  it('renders gallery with multiple images and thumbnails', () => {
    render(
      <ProductImageGallery images={mockImages} productName={productName} />
    );

    // Should have main image + 3 thumbnails = 4 images
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(4);

    // Check thumbnails are buttons
    const thumbnailButtons = screen.getAllByRole('button');
    expect(thumbnailButtons).toHaveLength(3);
  });

  it('displays first image as selected by default', () => {
    render(
      <ProductImageGallery images={mockImages} productName={productName} />
    );

    const mainImage = screen.getByAltText(`${productName} - Image 1`);
    expect(mainImage).toHaveAttribute('src', mockImages[0]);
  });

  it('changes main image when thumbnail is clicked', async () => {
    const user = userEvent.setup();
    render(
      <ProductImageGallery images={mockImages} productName={productName} />
    );

    const thumbnailButtons = screen.getAllByRole('button');

    // Click second thumbnail
    await user.click(thumbnailButtons[1]);

    // Main image should now be the second image
    const mainImage = screen.getByAltText(`${productName} - Image 2`);
    expect(mainImage).toHaveAttribute('src', mockImages[1]);
  });

  it('applies selected border style to active thumbnail', async () => {
    const user = userEvent.setup();
    render(
      <ProductImageGallery images={mockImages} productName={productName} />
    );

    const thumbnailButtons = screen.getAllByRole('button');

    // First thumbnail should have border-black class
    expect(thumbnailButtons[0]).toHaveClass('border-black');
    expect(thumbnailButtons[1]).toHaveClass('border-gray-200');

    // Click second thumbnail
    await user.click(thumbnailButtons[1]);

    // Second thumbnail should now have border-black class
    expect(thumbnailButtons[1]).toHaveClass('border-black');
    expect(thumbnailButtons[0]).toHaveClass('border-gray-200');
  });

  it('renders all thumbnails with correct alt text', () => {
    render(
      <ProductImageGallery images={mockImages} productName={productName} />
    );

    expect(screen.getByAltText(`${productName} thumbnail 1`)).toBeInTheDocument();
    expect(screen.getByAltText(`${productName} thumbnail 2`)).toBeInTheDocument();
    expect(screen.getByAltText(`${productName} thumbnail 3`)).toBeInTheDocument();
  });
});
