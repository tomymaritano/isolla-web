import ProductCard from '@/components/molecules/ProductCard';
import Section from '@/components/atoms/Section';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';
import { products } from '@/lib/data/products';

export default function ProductGrid() {
  // Show only specific products on homepage in this exact order: Bombo 02, Caballito piccolo, Coffe Table, Caballito petit
  const featuredProductIds = [6, 2, 9, 1]; // Bombo 02, Caballito piccolo, Coffe Table, Caballito petit
  const featuredProducts = featuredProductIds.map(id => products.find(p => p.id === id)).filter(Boolean);

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button href="/productos" variant="outline">
            CATÁLOGO
          </Button>
        </div>
      </Container>
    </Section>
  );
}
