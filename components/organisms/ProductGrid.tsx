import ProductCard from '@/components/molecules/ProductCard';
import Section from '@/components/atoms/Section';
import Container from '@/components/atoms/Container';
import { products } from '@/lib/data/products';

export default function ProductGrid() {
  // Show only specific products on homepage: Bombo 02, Caballito piccolo, Coffe Table, Caballito petit
  const featuredProductIds = [6, 2, 9, 1]; // Bombo 02, Caballito piccolo, Coffe Table, Caballito petit
  const featuredProducts = products.filter(p => featuredProductIds.includes(p.id));

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
