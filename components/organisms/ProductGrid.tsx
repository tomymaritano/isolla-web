import ProductCard from '@/components/molecules/ProductCard';
import Section from '@/components/atoms/Section';
import Container from '@/components/atoms/Container';
import { products } from '@/lib/data/products';

export default function ProductGrid() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
